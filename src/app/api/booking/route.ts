import { NextRequest, NextResponse } from "next/server";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP ?? "917026889254";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const required = ["name", "phone", "service", "from", "date"];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const lines = [
      `Hello ZipGoa! 👋`,
      ``,
      `🚕 *BOOKING REQUEST — ZipGoa Website*`,
      `─────────────────────────────────`,
      `📋 Service: ${data.service}`,
      `🚙 Vehicle: ${data.vehicle || "—"}`,
      `📍 From: ${data.from}`,
      `📍 To: ${data.to || "—"}`,
      `📅 Date: ${data.date}`,
      `🕐 Time: ${data.time || "—"}`,
      data.returnDate ? `🔄 Return: ${data.returnDate}` : null,
      `👥 Passengers: ${data.passengers || 1}`,
      ``,
      `👤 *CUSTOMER DETAILS*`,
      `─────────────────────────────────`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      data.notes ? `\nNotes: ${data.notes}` : null,
      ``,
      `🌐 Source: Website Booking Form`,
      `Please confirm availability and share the final rate. Thank you!`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines)}`;

    return NextResponse.json({
      success: true,
      message: "Booking received! Opening WhatsApp to confirm.",
      whatsappUrl,
    });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json(
      { error: "Failed to process booking. Please try again." },
      { status: 500 }
    );
  }
}
