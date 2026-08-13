import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { personalInfo } from "@/lib/data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server configuration missing: RESEND_API_KEY not set" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const recipient = personalInfo.email || "zeeshankhan8838@gmail.com";
    const emailSubject = subject?.trim()
      ? `Portfolio Contact — ${subject.trim()}`
      : `Portfolio Contact — New message from ${name}`;

    const htmlContent = `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#0B0E11; color:#EAECEF; padding: 32px 20px; line-height: 1.6;">
        <div style="max-width: 560px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, rgba(240,185,11,0.2), rgba(240,185,11,0.02)); border: 1px solid rgba(240,185,11,0.35); border-radius: 14px; padding: 22px 24px; margin-bottom: 20px;">
            <div style="display:flex; align-items:center; gap: 10px; margin-bottom: 6px;">
              <div style="width:10px; height:10px; background:#F0B90B; border-radius:9999px; box-shadow: 0 0 10px rgba(240,185,11,0.9);"></div>
              <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.18em; color:#F0B90B; text-transform: uppercase;">
                New portfolio message
              </span>
            </div>
            <div style="font-size: 22px; font-weight: 800; color:#EAECEF; letter-spacing: -0.02em;">
              ${emailSubject}
            </div>
          </div>

          <div style="background: #181A20; border: 1px solid #2B3139; border-radius: 14px; padding: 24px;">
            <div style="display: grid; gap: 14px; margin-bottom: 20px; padding-bottom: 18px; border-bottom: 1px solid #23282F;">
              <div>
                <div style="font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform: uppercase; color:#848E9C; margin-bottom:4px;">
                  From
                </div>
                <div style="font-size: 15px; font-weight: 600; color:#EAECEF;">
                  ${String(name).replace(/</g, "&lt;")}
                </div>
                <a href="mailto:${email}" style="font-size:14px; color:#F0B90B; text-decoration: none; font-weight:500;">
                  ${email}
                </a>
              </div>
              ${subject ? `
              <div>
                <div style="font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform: uppercase; color:#848E9C; margin-bottom:4px;">
                  Subject
                </div>
                <div style="font-size: 15px; font-weight: 600; color:#EAECEF;">
                  ${String(subject).replace(/</g, "&lt;")}
                </div>
              </div>` : ""}
            </div>

            <div>
              <div style="font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform: uppercase; color:#848E9C; margin-bottom:8px;">
                Message
              </div>
              <div style="font-size: 15px; color:#B7BDC6; line-height: 1.7; white-space: pre-wrap;">
                ${String(message).replace(/</g, "&lt;")}
              </div>
            </div>
          </div>

          <div style="margin-top:18px; text-align:center; font-size:11px; color:#5E6673;">
            Sent via portfolio contact form · Resend API
          </div>
        </div>
      </div>
    `;

    const textContent = `
Portfolio Contact Form — ${new Date().toLocaleString()}

From: ${name}
Email: ${email}${subject ? `\nSubject: ${subject}` : ""}

Message:
-------------------------------------------------------
${message}
-------------------------------------------------------

Reply to: ${email}
    `.trim();

    const data = await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: recipient,
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
      text: textContent,
    });

    return NextResponse.json(
      { success: true, data, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[contact route] Error:", err);
    return NextResponse.json(
      {
        error:
          err?.message ||
          "Failed to send message. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
