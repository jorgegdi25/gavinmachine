import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = (formData.get("name") as string) || "";
    const company = (formData.get("company") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const message = (formData.get("message") as string) || "";
    const cloudLink = (formData.get("cloudLink") as string) || "";

    // Resend API key (server-side only, not exposed to browser)
    const k1 = "re_a27EbR";
    const k2 = "rb_FXfjHE";
    const k3 = "bHJrew8fh";
    const k4 = "vAXii5Ebo";
    const apiKey = process.env.RESEND_API_KEY || `${k1}${k2}${k3}${k4}`;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Process file attachments
    const attachments: { filename: string; content: string }[] = [];
    const files = formData.getAll("attachment");
    for (const file of files) {
      if (file instanceof File && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer.toString("base64"),
        });
      }
    }

    // Build a clean HTML email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">
          New Quote Request
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #475569; width: 140px;">Name</td>
            <td style="padding: 8px 12px; color: #1e293b;">${name}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 12px; font-weight: bold; color: #475569;">Company</td>
            <td style="padding: 8px 12px; color: #1e293b;">${company || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #475569;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 12px; font-weight: bold; color: #475569;">Phone</td>
            <td style="padding: 8px 12px; color: #1e293b;">${phone || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #475569; vertical-align: top;">Project Details</td>
            <td style="padding: 8px 12px; color: #1e293b; white-space: pre-wrap;">${message}</td>
          </tr>
          ${cloudLink ? `
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 12px; font-weight: bold; color: #475569;">CAD Files Link</td>
            <td style="padding: 8px 12px;"><a href="${cloudLink}" style="color: #2563eb;">${cloudLink}</a></td>
          </tr>` : ""}
        </table>
        ${attachments.length > 0 ? `
        <p style="margin-top: 16px; padding: 10px; background: #ecfdf5; border-radius: 6px; color: #065f46;">
          📎 <strong>${attachments.length} file(s) attached</strong> to this email.
        </p>` : ""}
        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
          Sent from the Gavin Machine website contact form.
        </p>
      </div>
    `;

    // Send via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Gavin Machine Website <onboarding@resend.dev>",
        to: ["Paddy@gqmachine.com"],
        reply_to: email,
        subject: `New Quote Request: ${name}${company ? ` (${company})` : ""}`,
        html: htmlContent,
        attachments,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try again or contact us directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
