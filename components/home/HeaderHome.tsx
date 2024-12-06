"use client";

import { motion } from "framer-motion";

import { title } from "@/components/primitives";

export default function HeaderHome() {
  return (
    <>
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
        Transform your phone with the mobile DroidCam app into a motion
        detection and monitoring system, receiving real-time alerts about any
        movement or activity in the monitored area.
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
        <span className="text-cyan-400 text-lg font-light"> Telegram </span>
        for real-time screenshots and notifications.
      </motion.span>
    </>
  );
}
