import type { FormEvent } from "react";
import type { FormStatus } from "@/types";

import { useRef, useState } from "react";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { sendTelegramMessage } from "@/services/telegramService";

const FormAbout = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const buttonSubmit = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!buttonSubmit.current) return;

    setFormStatus("loading");

    if (
      nameRef.current?.value &&
      emailRef.current?.value &&
      descriptionRef.current?.value
    ) {
      const formValues = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        description: descriptionRef.current.value,
      };

      const status = await sendTelegramMessage(formValues);

      setFormStatus(status);

      if (status === "success") {
        const form = event.target as HTMLFormElement;

        form.reset();
        (nameRef.current.value = ""),
        (emailRef.current.value = ""),
        (descriptionRef.current.value = ""),
        
        setTimeout(() => {
          setFormStatus("idle");
        }, 2000);
      }
    }
  };

  const getButtonProps = (status: FormStatus) => {
    switch (status) {
      case "loading":
        return {
          text: "Sending...",
          color: "warning" as const,
          disabled: true,
        };
      case "success":
        return { text: "Sent!", color: "success" as const, disabled: true };
      case "error":
        return {
          text: "Error! Try again",
          color: "danger" as const,
          disabled: false,
        };
      default:
        return { text: "Submit", color: "warning" as const, disabled: false };
    }
  };

  const buttonProps = getButtonProps(formStatus);

  return (
    <form className="flex flex-col gap-3 py-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 md:flex-row">
        <Input
          ref={nameRef}
          isRequired
          label="Your Name"
          name="name"
          size="sm"
          type="text"
        />
        <Input
          ref={emailRef}
          isRequired
          classNames={{
            errorMessage: "font-extralight text-sm",
          }}
          label="Your Email"
          size="sm"
          type="email"
          validationBehavior="native"
        />
      </div>
      <Textarea ref={descriptionRef} isRequired label="Description" />

      <Button
        ref={buttonSubmit}
        className="mt-5"
        color={buttonProps.color}
        disabled={buttonProps.disabled}
        type="submit"
        variant="flat"
      >
        {buttonProps.text}
      </Button>
    </form>
  );
};

export default FormAbout;
