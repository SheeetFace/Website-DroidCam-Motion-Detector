import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type FormStatus = "idle" | "loading" | "success" | "error";

export interface IntegrationStep {
  id: string;
  type:
    | "heading"
    | "text"
    | "textWith"
    | "image"
    | "warning"
    | "warningWith"
    | "info"
    | "infoWith";
  content: string;
  additionalInfo?: {
    imageAlt?: string;
    colorScheme?: "warning" | "info";
  };
}

export interface Integration {
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
