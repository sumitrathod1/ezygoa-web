import { NextRequest, NextResponse } from "next/server";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP ?? "917026889254";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const required = ["name", "phone", "message"];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const lines = [
      `Hello EzyGoa! 👋`,
      ``,
      `📩 *CONTACT FORM MESSAGE — EzyGoa Website*`,
      `─────────────────────────────────`,
      `👤 Name: ${data.name}`,
      `📞 Phone: ${data.phone}`,
      data.email ? `📧 Email: ${data.email}` : null,
      data.subject ? `📋 Subject: ${data.subject}` : null,
      ``,
      `💬 Message:`,
      data.message,
      ``,
      `🌐 Source: Website Contact Form`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines)}`;

    return NextResponse.json({
      success: true,
      message: "Message received! We will get back to you shortly.",
      whatsappUrl,
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
