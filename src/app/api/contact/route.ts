import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Contact form handler. Sends via Purelymail SMTP.
// Env: SMTP_USER, SMTP_PASS (the website@ mailbox), MAIL_TO (comma-separated recipients),
// optional SMTP_HOST / SMTP_PORT.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
const clean = (v: unknown, max = 5000) =>
  typeof v === "string"
    ? v
        // biome-ignore lint/suspicious/noControlCharactersInRegex: strip control characters
        .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
        .trim()
        .slice(0, max)
    : "";
const oneLine = (s: string) => s.replace(/[\r\n"]/g, " ");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (clean(body.website)) return NextResponse.json({ success: true }); // honeypot

  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const interest = clean(body.interest, 200) || "General";
  const message = clean(body.message);

  if (!name || !EMAIL_RE.test(email) || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error("contact: SMTP env not configured");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.purelymail.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: { name: "Cliftonville Farms Website", address: SMTP_USER },
      to: MAIL_TO.split(",").map((s) => s.trim()).filter(Boolean),
      replyTo: { name: oneLine(name), address: email },
      subject: oneLine(`New Inquiry: ${interest} - ${name}`).slice(0, 200),
      text: `New website inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nInterest: ${interest}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> ${esc(email)}</p>
          <p><strong>Phone:</strong> ${esc(phone || "Not provided")}</p>
          <p><strong>Interest:</strong> ${esc(interest)}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 10px; border-radius: 5px; white-space: pre-wrap;">${esc(message)}</p>
          <p style="color:#999;font-size:12px">Reply to this email to answer ${esc(name)} directly.</p>
        </div>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("contact: send failed", (error as Error)?.message);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }
}
