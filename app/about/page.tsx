"use client";

import { motion } from "framer-motion";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className=" flex flex-col text-center gap-5">
      <motion.h1
        animate={{ opacity: 1 }}
        className={title({ color: "green" })}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        About
      </motion.h1>

      <motion.div
        animate={{ opacity: 1 }}
        className="w-full text-start mt-2 text-lg font-extralight dark:font-thin "
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <div className="flex flex-col gap-4">
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
        <div className="flex flex-col gap-3">
          <span>
            If you have questions, suggestions, or want to report a problem,
            contact me:
          </span>
          <form className="flex flex-col gap-3 py-6">
            <div className="flex flex-col gap-3 md:flex-row">
              <Input isRequired label="Your Name" size="sm" type="text" />
              <Input
                isRequired
                classNames={{
                  errorMessage: "font-extralight text-sm",
                }}
                label="Your Email"
                size="sm"
                type="email"
                validationBehavior="native"
              />
            </div>
            <Textarea isRequired label="Description" />

            <Button className="mt-5" color="warning" variant="flat">
              Submit
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
