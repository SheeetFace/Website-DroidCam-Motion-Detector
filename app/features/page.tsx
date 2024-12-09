"use client";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { motion } from "framer-motion";

import ListFeatures from "@/components/features/ListFeatures";
import Title from "@/components/title";

export default function FeaturesPage() {
  return (
    <section className=" flex flex-col text-center gap-5">
      <Title pageTitle="Features" />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      >
        <ScrollShadow className="max-h-[64vh] overflow-auto z-50" size={55}>
          <ListFeatures />
        </ScrollShadow>
      </motion.div>
    </section>
  );
}
