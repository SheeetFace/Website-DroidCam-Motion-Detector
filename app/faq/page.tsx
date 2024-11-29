"use client";
import { motion } from "framer-motion";

import AccordionFaq from "@/components/faq/AccordionFaq";
import Title from "@/components/title";

export default function FAQPage() {
  return (
    <section className=" flex flex-col text-center gap-5">
      <Title pageTitle="FAQ" />
      <motion.div
        animate={{ opacity: 1 }}
        className="flex w-3/5 text-start mt-2 text-lg font-extralight dark:font-thin z-50"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      >
        <AccordionFaq />
      </motion.div>
    </section>
  );
}
