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

    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "Paddy@gqmachine.com";

    // Prepare FormSubmit payload
    const formSubmitData = new FormData();
    formSubmitData.append("Full Name", name);
    formSubmitData.append("Company", company);
    formSubmitData.append("Email", email);
    formSubmitData.append("Phone", phone);
    formSubmitData.append("Project Details & Specifications", message);
    if (cloudLink) {
      formSubmitData.append("Cloud CAD Files Link (Google Drive / WeTransfer)", cloudLink);
    }
    formSubmitData.append("_replyto", email);
    formSubmitData.append("_subject", `New Quote Request: ${name} ${company !== "N/A" ? `(${company})` : ""}`);
    formSubmitData.append("_template", "table");
    formSubmitData.append("_captcha", "false");

    if (file && file.size > 0 && file.name) {
      formSubmitData.append("attachment", file);
    }

    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formSubmitData,
    });

    const data = await response.json();

    if (!response.ok || data.success === "false") {
      return NextResponse.json(
        { success: false, message: data.message || "Failed to deliver message via FormSubmit." },
        { status: response.status || 400 }
      );
    }

    return NextResponse.json({ success: true, message: data.message });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

