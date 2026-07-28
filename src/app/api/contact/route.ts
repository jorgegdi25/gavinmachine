import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = (formData.get("name") as string) || "";
    const company = (formData.get("company") as string) || "N/A";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "N/A";
    const message = (formData.get("message") as string) || "";
    const file = formData.get("file") as File | null;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "RESEND_API_KEY is not configured in environment variables." },
        { status: 500 }
      );
    }

    // Process attachment if provided
    const attachments: Array<{ filename: string; content: string }> = [];
    if (file && file.size > 0 && file.name) {
      const arrayBuffer = await file.arrayBuffer();
      const base64Content = Buffer.from(arrayBuffer).toString("base64");
      attachments.push({
        filename: file.name,
        content: base64Content,
      });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <h2 style="color: #0c1a2d; border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-top: 0;">New Quote Request - Gavin Machine</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 120px;">Full Name:</td>
            <td style="padding: 8px 0; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Company:</td>
            <td style="padding: 8px 0; color: #0f172a;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0; color: #0f172a;">${phone}</td>
          </tr>
        </table>
        
        <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; margin-top: 16px;">
          <h4 style="margin-top: 0; margin-bottom: 8px; color: #0c1a2d;">Project Details & Specifications:</h4>
          <p style="white-space: pre-wrap; color: #334155; margin: 0; line-height: 1.6;">${message}</p>
        </div>

        ${
          file && file.size > 0
            ? `<div style="margin-top: 20px; padding: 12px; background-color: #eff6ff; border-radius: 6px; color: #1e40af; font-size: 0.9rem;">
                <strong>Attached Drawing/Spec:</strong> ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)
               </div>`
            : ""
        }

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 12px 0;" />
        <p style="font-size: 0.8rem; color: #94a3b8; margin: 0; text-align: center;">Sent automatically from Gavin Machine Website Contact Form</p>
      </div>
    `;

    const resendPayload: any = {
      from: "Gavin Machine Website <onboarding@resend.dev>",
      to: ["Paddy@gqmachine.com"],
      subject: `New Quote Request: ${name} ${company !== "N/A" ? `(${company})` : ""}`,
      html: htmlContent,
      reply_to: email,
    };

    if (attachments.length > 0) {
      resendPayload.attachments = attachments;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resendPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: data.message || "Resend failed to deliver email." },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
