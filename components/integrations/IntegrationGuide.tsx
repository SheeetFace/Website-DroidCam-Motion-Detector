import { FC } from "react";
import clsx from "clsx";
import { Image } from "@nextui-org/image";
import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

interface IntegrationStep {
  id: string;
  type: "heading" | "text" | "image" | "warning" | "info";
  content: string;
  additionalInfo?: {
    imageAlt?: string;
    colorScheme?: "success" | "warning" | "info" | "error";
  };
}

interface Integration {
  id: string;
  title: string;
  titleColor: string;
  description: string;
  platform: "telegram" | "discord";
  difficulty: "easy" | "medium";
  timeEstimate: string;
  requirements: string[];
  steps: IntegrationStep[];
}

type IntegrationsProps = { integration: Integration };

export const integrations: Integration[] = [
  {
    id: "telegram",
    title: "Telegram Bot Integration",
    titleColor: "text-cyan-500",
    description: "How to create and connect Telegram bot to your application",
    platform: "telegram",
    difficulty: "easy",
    timeEstimate: "5 minutes",
    requirements: ["Telegram account", "Ethernet"],
    steps: [
      {
        id: "step-1",
        type: "heading",
        content: "1. Create a New Bot with BotFather",
      },
      {
        id: "step-1-1",
        type: "text",
        content: "Open Telegram and search for @BotFather",
      },
      {
        id: "step-1-2",
        type: "image",
        content:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcSq5qP8Q4xE5thtXq6ZrCJshRQhEasLU1tgLFl3FfrE3Cpcsu4C70aQN_Te95wz2X9Ug&usqp=CAU",
        additionalInfo: {
          imageAlt: "BotFather initial screen",
        },
      },
      {
        id: "step-1-3-1",
        type: "warning",
        content:
          "Note that it was an official bot that has a verification badge.",
        additionalInfo: {
          colorScheme: "info",
        },
      },
      {
        id: "step-1-3",
        type: "text",
        content: `
  const TelegramBot = require('node-telegram-bot-api');
  const token = 'YOUR_BOT_TOKEN';
  const bot = new TelegramBot(token, {polling: true});`,
      },
      {
        id: "step-1-4",
        type: "warning",
        content: "Never share your bot token publicly!",
        additionalInfo: {
          colorScheme: "warning",
        },
      },
      {
        id: "step-2",
        type: "heading",
        content: "2. Configure Webhook",
      },
    ],
  },
  {
    id: "DISCORD-bot",
    title: "DISCORD Bot Integration",
    titleColor: "text-indigo-600",
    description: "How to create and connect Telegram bot to your application",
    platform: "telegram",
    difficulty: "easy",
    timeEstimate: "15 minutes",
    requirements: [
      "Telegram account",
      "Node.js installed",
      "Basic JavaScript knowledge",
    ],
    steps: [
      {
        id: "step-1",
        type: "heading",
        content: "1. Create a New Bot with BotFather",
      },
      {
        id: "step-1-1",
        type: "text",
        content: "Open Telegram and search for @BotFather",
      },
      {
        id: "step-1-2",
        type: "image",
        content:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcSq5qP8Q4xE5thtXq6ZrCJshRQhEasLU1tgLFl3FfrE3Cpcsu4C70aQN_Te95wz2X9Ug&usqp=CAU",
        additionalInfo: {
          imageAlt: "BotFather initial screen",
        },
      },
      {
        id: "step-1-3",
        type: "text",
        content: `
  const TelegramBot = require('node-telegram-bot-api');
  const token = 'YOUR_BOT_TOKEN';
  const bot = new TelegramBot(token, {polling: true});`,
        additionalInfo: {
          colorScheme: "warning",
        },
      },
      {
        id: "step-1-4",
        type: "warning",
        content: "Never share your bot token publicly!",
        additionalInfo: {
          colorScheme: "warning",
        },
      },
      {
        id: "step-2",
        type: "heading",
        content: "2. Configure Webhook",
      },
    ],
  },
];

const IntegrationGuide: FC<IntegrationsProps> = ({ integration }) => {
  const renderStep = (step: IntegrationStep) => {
    switch (step.type) {
      case "heading":
        return <h2 className="text-xl font-bold my-4">{step.content}</h2>;

      case "text":
        return <p className="my-2">{step.content}</p>;

      case "image":
        return (
          <div className="my-4">
            <Image
              alt={step.additionalInfo?.imageAlt || ""}
              className="max-w-full rounded-lg"
              loading="lazy"
              src={step.content}
            />
          </div>
        );

      case "warning":
      case "info":
        return (
          <Card
            className={`my-4 p-4 ${
              step.additionalInfo?.colorScheme === "warning"
                ? "bg-yellow-500/50"
                : "bg-rose-600/50"
            }`}
          >
            {step.content}
          </Card>
        );
    }
  };

  return (
    <section>
      <div className="mb-6">
        <h1 className={clsx("text-2xl font-bold", integration.titleColor)}>
          {integration.title}
        </h1>
        <div className="my-4 flex gap-1">
          <Chip color="warning" size="sm" variant="bordered">
            {integration.difficulty}
          </Chip>
          <Chip color="warning" size="sm" variant="bordered">
            {integration.timeEstimate}
          </Chip>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Requirements:</h3>
          <ul className="list-disc pl-5 font-extralight">
            {integration.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {integration.steps.map((step) => (
          <div key={step.id}>{renderStep(step)}</div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationGuide;
