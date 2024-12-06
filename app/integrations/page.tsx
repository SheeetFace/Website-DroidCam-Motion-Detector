"use client";
import type { Integration } from "@/types";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { siteConfig } from "@/config/site";
import GuideIntegration from "@/components/integrations/GuideIntegration";

export default function IntegrationsPage() {
  const integrations: Integration[] = siteConfig.integrations as Integration[];

  return (
    <section className="flex flex-col text-center gap-1">
      <Tabs
        aria-label="Integration options"
        classNames={{
          tabList: "sm:flex-row flex-col",
        }}
        color="success"
      >
        {integrations.map((integration) => (
          <Tab key={integration.id} title={integration.title}>
            <ScrollShadow
              className="max-h-[55vh] overflow-auto z-50 rounded-r-large rounded-l-none"
              size={55}
            >
              <Card className="bg-zinc-800/20 rounded-l-large rounded-r-none">
                <CardBody>
                  <GuideIntegration integration={integration} />
                </CardBody>
              </Card>
            </ScrollShadow>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}
