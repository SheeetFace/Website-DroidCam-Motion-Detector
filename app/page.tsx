"use client";
import { motion } from "framer-motion";

import HeaderHome from "@/components/home/HeaderHome";
import CardHome from "@/components/home/CardHome";
import VideoExample from "@/components/home/VideoExample";
import { siteConfig } from "@/config/site";

export default function Home() {
  const renderCards = () => {
    return siteConfig.downloadVersions.map((item, i) => {
      return (
        <CardHome
          key={i}
          downloadUrl={item.downloadUrl}
          features={item.features}
          size={item.size}
          title={item.title}
          type={item.type}
        />
      );
    });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">
        <HeaderHome />
        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-col gap-5 md:flex-row">
              {renderCards()}
            </div>
            <VideoExample />
          </div>
        </motion.section>
      </div>
    </section>
  );
}
