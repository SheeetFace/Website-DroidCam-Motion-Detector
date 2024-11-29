import { FC } from "react";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";

type TitleProps = {
  pageTitle: string;
};

const Title: FC<TitleProps> = ({ pageTitle }) => {
  return (
    <motion.h1
      animate={{ opacity: 1 }}
      className={`${title({ color: "green" })} min-h-[2em] `}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
    >
      {pageTitle}
    </motion.h1>
  );
};

export default Title;
