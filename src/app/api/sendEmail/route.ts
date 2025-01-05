import formData from "form-data";
import Mailgun from "mailgun.js";
import { NextRequest, NextResponse } from "next/server";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
  url: "https://api.mailgun.net",
});

const mailto = process.env.MAILGUN_EMAIL_TO || "";
const domain = process.env.MAILGUN_DOMAIN || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body
    if (!body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields: email, subject, message" },
        { status: 400 }
      );
    }

    const msg = {
      from: `Portfolio Contact <noreply@${domain}>`,
      replyTo: body.email,
      to: [mailto],
      subject: body.subject,
      text: body.message,
      html: `<p>${body.message}</p>`,
    };

    const response = await mg.messages.create(domain, msg);
    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Mailgun Error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error?.message || error },
      { status: 500 }
    );
  }
}
