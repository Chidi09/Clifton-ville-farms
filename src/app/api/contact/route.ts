import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    // 1. Validate data (Basic check)
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 2. Prepare ZeptoMail Payload
    const url = "https://api.zeptomail.com/v1.1/email";
    const token = process.env.ZEPTOMAIL_TOKEN;
    
    if (!token) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const payload = {
      from: {
        address: process.env.ZEPTOMAIL_FROM_EMAIL,
        name: process.env.ZEPTOMAIL_FROM_NAME,
      },
      to: [
        {
          email_address: {
            address: process.env.ZEPTOMAIL_TO_EMAIL,
            name: "Cliftonville Admin",
          },
        },
      ],
      reply_to: [
        {
          address: email,
          name: name,
        },
      ],
      subject: `New Inquiry: ${interest} - ${name}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // 3. Send Request to ZeptoMail
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("ZeptoMail Error:", errorData);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
