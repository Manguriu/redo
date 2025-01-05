// import formData from "form-data";
// import Mailgun from "mailgun.js";
// import { NextRequest, NextResponse } from "next/server";

// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//   username: "api",
//   key: `${process.env.MAILGUN_API_KEY}`, // Make sure this environment variable is set
//   url: "https://api.eu.mailgun.net", // Change to "https://api.eu.mailgun.net" for EU region
// });

// const mailto = process.env.MAILGUN_EMAIL_TO!;

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const msg = {
//       from: `Portfolio Contact <${body.email}>`,
//       to: [mailto],
//       subject: body.subject,
//       text: body.message,
//       html: `<h1>${body.message}</h1>`, // Adds HTML content if needed
//     };

//     const response = await mg.messages.create(
//       `${process.env.MAILGUN_DOMAIN}`,
//       msg
//     );
//     return NextResponse.json(
//       { success: true, data: response },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Mailgun Error:", error);
//     return NextResponse.json(
//       { error: "Failed to send email", details: error.message },
//       { status: 500 }
//     );
//   }
// }

import formData from "form-data";
import Mailgun from "mailgun.js";
import { NextRequest, NextResponse } from "next/server";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "", // Ensure this is set
  url: "https://api.mailgun.net", // Update for EU region if needed
});

const mailto = process.env.MAILGUN_EMAIL_TO || ""; // Ensure recipient email is set
const domain = process.env.MAILGUN_DOMAIN || ""; // Ensure domain is set

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
      from: `Portfolio Contact <noreply@${domain}>`, // Use a verified sender address
      replyTo: body.email, // Optional: set the user's email as reply-to
      to: [mailto],
      subject: body.subject,
      text: body.message,
      html: `<p>${body.message}</p>`, // Add HTML formatting
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
