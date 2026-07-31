import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const incomingFormData = await request.formData();
    const name = (incomingFormData.get("name") as string) || "";
    const company = (incomingFormData.get("company") as string) || "N/A";
    const email = (incomingFormData.get("email") as string) || "";
    const phone = (incomingFormData.get("phone") as string) || "N/A";
    const message = (incomingFormData.get("message") as string) || "";
    const cloudLink = (incomingFormData.get("cloudLink") as string) || "";
    const file = incomingFormData.get("file") as File | null;

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: "Web3Forms Access Key is not configured in environment variables." },
        { status: 500 }
      );
    }

    // Prepare Web3Forms payload
    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("subject", `New Quote Request: ${name} ${company !== "N/A" ? `(${company})` : ""}`);
    formData.append("from_name", name);
    formData.append("replyto", email);
    
    // Custom Fields
    formData.append("Full Name", name);
    formData.append("Company", company);
    formData.append("Email", email);
    formData.append("Phone", phone);
    formData.append("Project Details & Specifications", message);
    
    if (cloudLink) {
      formData.append("Cloud CAD Files Link", cloudLink);
    }

    if (file && file.size > 0 && file.name) {
      formData.append("attachment", file);
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { success: false, message: data.message || "Failed to deliver message via Web3Forms." },
        { status: response.status || 400 }
      );
    }

    return NextResponse.json({ success: true, message: data.message });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
