"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import IntegrationGuide from "@/components/integrations/IntegrationGuide";
import { integrations } from "@/components/integrations/IntegrationGuide";

export default function IntegrationsPage() {
  return (
    <section className="flex flex-col text-center gap-1">
      <Tabs aria-label="Integration options" color="success">
        {integrations.map((integration) => (
          <Tab key={integration.id} title={integration.title}>
            <ScrollShadow className="max-h-[55vh] overflow-auto z-50" size={55}>
              <Card>
                <CardBody>
                  <IntegrationGuide integration={integration} />
                </CardBody>
              </Card>
            </ScrollShadow>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}