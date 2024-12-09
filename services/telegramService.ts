// import type { FormStatus } from "@/types";

// type FormValues = {
//   name?: string;
//   email?: string;
//   description?: string;
// };

// export const sendTelegramMessage = async (
//   formValues: FormValues,
// ): Promise<FormStatus> => {
//   try {
//     const response = await fetch("/api/sendTelegram", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formValues),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to send message");
//     }

//     return "success";
//   } catch (error) {
//     console.error("Error sending message:", error);

//     return "error";
//   }
// };


// Moved requests from server-side to client-side,
// because hosting a Next.js application on Firebase
// requires purchasing additional Firebase Functions
// for server-side requests.

import type { FormStatus } from "@/types";

type FormValues = {
  name?: string;
  email?: string;
  description?: string;
};

export const sendTelegramMessage = async (
  formValues: FormValues,
): Promise<FormStatus> => {
  const { name, email, description } = formValues;
  const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!token || !chatID) {
    console.error("Missing credentials");
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

      return "error";
    }

    return "success";
  } catch (error) {
    console.error("Error sending message to Telegram:", error);

    return "error";
  }
};
