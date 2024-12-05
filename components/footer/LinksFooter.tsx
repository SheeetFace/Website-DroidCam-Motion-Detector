"use client";

import { button as buttonStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";

import { KoFiIcon, OpenCollectiveIcon, GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function LinksFooter() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col justify-between w-full lg:flex-row gap-1 px-6"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
    >
      <Link
        isExternal
        aria-label="Support Project on Ko-Fi (opens in a new tab)"
        className={buttonStyles({
          variant: "flat",
          radius: "full",
          color: "success",
        })}
        href={siteConfig.links.koFi}
      >
        <KoFiIcon size={20} />
        Support Project on Ko-Fi
      </Link>

      <Link
        isExternal
        aria-label="Support Project on Open Collective (opens in a new tab)"
        className={buttonStyles({
          variant: "flat",
          radius: "full",
          color: "success",
        })}
        href={siteConfig.links.openCollective}
      >
        <OpenCollectiveIcon size={20} />
        Support Project on Open Collective
      </Link>

      <Link
        isExternal
        aria-label="Project on GitHub (opens in a new tab)"
        className={buttonStyles({
          variant: "flat",
          radius: "full",
          color: "success",
        })}
        href={siteConfig.links.github}
      >
        <GithubIcon size={20} />
        Project on GitHub
      </Link>
    </motion.div>
  );
}
