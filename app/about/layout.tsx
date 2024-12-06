import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.pages.about.description,
  keywords: siteConfig.pages.about.keywords,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col md:py-10">
      <div className="inline-block w-full">{children}</div>
    </section>
  );
}
