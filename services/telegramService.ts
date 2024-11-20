import type { FormStatus } from "@/types";

type FormValues = {
  name?: string;
  email?: string;
  description?: string;
};

export const sendTelegramMessage = async (
  formValues: FormValues,
): Promise<FormStatus> => {
  try {
    const response = await fetch("/api/sendTelegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return "success";
  } catch (error) {
    console.error("Error sending message:", error);

    return "error";
  }
};
