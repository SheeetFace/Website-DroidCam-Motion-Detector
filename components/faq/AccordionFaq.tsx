import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { siteConfig } from "@/config/site";

export default function AccordionFaq() {
  return (
    <Accordion isCompact>
      {siteConfig.faq.map((item, i) => (
        <AccordionItem key={i} aria-label={item.title} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
