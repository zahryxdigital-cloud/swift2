import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// The Resend client is created SERVER-SIDE only.
// RESEND_API_KEY is read from .env.local and is NEVER sent to the browser.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.CONTACT_RECEIVER_EMAIL || "Infoalareeqtech@gmail.com"],
      replyTo: email,
      subject: `[Al Areeq Contact] ${subject || "New Inquiry"} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #c9a227, #e6b832); padding: 24px 32px;">
            <h1 style="margin: 0; color: #0f0f0f; font-size: 22px; font-weight: 700;">New Contact Form Submission</h1>
            <p style="margin: 4px 0 0; color: #0f0f0f; opacity: 0.7; font-size: 14px;">Al Areeq Technical Services</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #a0a0a0; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #e5e5e5; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a0a0a0; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #c9a227; font-size: 14px;">${email}</a></td>
              </tr>
              ${
                phone
                  ? `<tr>
                <td style="padding: 10px 0; color: #a0a0a0; font-size: 13px; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; color: #e5e5e5; font-size: 14px;"><a href="tel:${phone}" style="color: #c9a227;">${phone}</a></td>
              </tr>`
                  : ""
              }
              ${
                subject
                  ? `<tr>
                <td style="padding: 10px 0; color: #a0a0a0; font-size: 13px; vertical-align: top;">Subject</td>
                <td style="padding: 10px 0; color: #e5e5e5; font-size: 14px;">${subject}</td>
              </tr>`
                  : ""
              }
            </table>
            <div style="margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #c9a227;">
              <p style="margin: 0 0 8px; color: #a0a0a0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; color: #e5e5e5; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.05); font-size: 12px; color: #666;">
            This email was sent from the Al Areeq website contact form.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend Error]", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("[API /send Error]", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
