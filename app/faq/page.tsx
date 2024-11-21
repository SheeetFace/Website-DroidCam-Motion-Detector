"use client";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";
import AccordionFaq from "@/components/faq/AccordionFaq";

export default function FAQPage() {
  return (
    <section className=" flex flex-col text-center gap-5">
      <motion.h1
        animate={{ opacity: 1 }}
        className={title({ color: "green" })}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        FAQ
      </motion.h1>
      <motion.div
        animate={{ opacity: 1 }}
        className="flex w-3/5 text-start mt-2 text-lg font-extralight dark:font-thin "
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      >
        <AccordionFaq />
      </motion.div>
    </section>
  );
}
