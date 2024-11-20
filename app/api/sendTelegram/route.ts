import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const { name, email, description } = await request.json();
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatID = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatID) {
    console.error("Missing credentials");

    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 },
    );
  }

  try {
    const text = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${description}`;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatID,
          text: text,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Response not OK:", data);
      throw new Error(
        data.description || `HTTP error! status: ${response.status}`,
      );
    }

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message to Telegram:", error);

    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 },
    );
  }
}
