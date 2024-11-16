"use client";

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center ">
        <motion.span
          animate={{ opacity: 1 }}
          className={title({ color: "green" })}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          DroidCam Motion Detector
        </motion.span>
        <br />
        <motion.span
          animate={{ opacity: 1 }}
          className="mt-2 text-lg font-extralight dark:font-thin "
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Transform your phone with the DroidCam app into a motion monitoring
          system, getting real-time information about any changes in space.
        </motion.span>
        <br />
        <motion.span
          animate={{ opacity: 1 }}
          className="mt-2 text-base font-extralight dark:font-thin "
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          In addition to all the standard DroidCam features, you can also
          customize sounds and area selection styles, and integrate the app with
          <span className="text-indigo-500 text-lg font-light"> Discord </span>
          and
          <span className="text-cyan-400 text-lg font-light">Telegram</span>
          for real-time screenshots and notifications.
        </motion.span>
      </div>
    </section>
  );
}
