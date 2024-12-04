"use client";

import { motion } from "framer-motion";
import { Divider } from "@nextui-org/divider";

import AboutForm from "@/components/about/AboutForm";
import Title from "@/components/title";

export default function AboutPage() {
  return (
    <section className="flex flex-col text-center">
      <Title pageTitle="About" />
      <motion.div
        animate={{ opacity: 1 }}
        className="w-full text-start mt-2 text-lg font-extralight dark:font-thin "
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <div className="flex relative z-10 flex-col gap-2 max-xl:text-sm max-sm:h-[150px] max-sm:overflow-y-auto">
          <span>
            The idea for the app came about when I was approached by a person
            asking for a simple motion alert solution that didn&apos;t require a
            network connection and could work over Wi-Fi. He was looking for a
            solution but didn&apos;t know what would work for him. The idea of
            using an old mobile phone as a camera turned out to be perfect for
            his requirements. He also needed to receive notifications on his
            phone through third-party apps like Telegram.
          </span>
          <span>
            Once the app suited him, I decided to rewrite it a bit, add
            functionality, and share it in the public domain so that everyone
            can benefit from this simple and monitoring system.
          </span>
        </div>
        <Divider className="my-4" />
        <div className="flex flex-col gap-3 max-xl:text-sm">
          <span>
            If you have questions, suggestions, or want to report a problem,
            contact me:
          </span>
          <AboutForm />
        </div>
      </motion.div>
    </section>
  );
}
