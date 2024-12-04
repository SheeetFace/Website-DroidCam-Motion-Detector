import type { Integration, IntegrationStep } from "@/types";

import { FC } from "react";
import clsx from "clsx";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Code } from "@nextui-org/code";

type IntegrationsProps = { integration: Integration };
type ColorCodeType = "success" | "secondary";

const GuideIntegration: FC<IntegrationsProps> = ({ integration }) => {
  const formatContent = (step: IntegrationStep) => {
    const split = step.content.split(" ");

    return split.map((w, i) => {
      if (w.startsWith("@") || w.startsWith("/")) {
        return (
          <>
            <Code key={i} color="primary">
              {w}
            </Code>{" "}
          </>
        );
      } else if (w.startsWith("<")) {
        let newW: string = w.replace("<", "");
        let color: ColorCodeType = "success";

        if (newW.endsWith(">")) newW = newW.replace(">", "");
        if (newW.includes("+")) {
          color = "secondary";
          newW = newW.replaceAll("+", " ");
        }

        return (
          <>
            <Code key={i} color={color}>
              <strong>{newW}</strong>
            </Code>{" "}
          </>
        );
      } else return w + " ";
    });
  };

  const getClassByColorScheme = (colorScheme: string = "warning") => {
    return `my-2 p-2 border-l-8 rounded  ${
      colorScheme === "warning"
        ? "bg-amber-500/20 border-s-amber-500/80"
        : "bg-rose-600/20 border-s-rose-600/80"
    }`;
  };

  const renderStep = (step: IntegrationStep) => {
    switch (step.type) {
      case "heading":
        return (
          <h2 className="text-xl text-green-400 font-bold my-6 text-center">
            {step.content}
          </h2>
        );

      case "text":
        return <p className="my-2 font-extralight">{step.content}</p>;

      case "textWith":
        return <p className="my-2 font-extralight">{formatContent(step)}</p>;

      case "warningWith":
      case "infoWith":
        return (
          <div
            className={getClassByColorScheme(step.additionalInfo?.colorScheme)}
          >
            {formatContent(step)}
          </div>
        );

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
          <div
            className={getClassByColorScheme(step.additionalInfo?.colorScheme)}
          >
            <span>{step.content}</span>
          </div>
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
          <h3 className="font-semibold text-amber-500">Requirements:</h3>
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

export default GuideIntegration;
