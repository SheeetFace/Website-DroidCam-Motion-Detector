"use client";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";
import ListFeatures from "@/components/features/Listfeatures";

export default function FeaturesPage() {
  return (
    <section className=" flex flex-col text-center gap-5">
      <motion.h1
        animate={{ opacity: 1 }}
        className={title({ color: "green" })}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        Features
      </motion.h1>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      >
        <ScrollShadow className="max-h-[55vh] overflow-auto z-50" size={55}>
          <ListFeatures />
        </ScrollShadow>
      </motion.div>
    </section>
  );
}
