import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";

export default function ListFeatures() {
  return (
    <>
      {siteConfig.features.map((feature, key) => {
        return (
          <motion.div
            key={key}
            className="flex flex-col w-full text-start"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: key * 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.p className="py-3 text-green-400">{feature.title}</motion.p>
            {feature.items.map((item, i) => {
              const [title, subtitle] = item.split(":");

              return (
                <motion.div
                  key={i}
                  className="w-full"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <ul className="list-disc pl-5 font-extralight">
                    <li>
                      <span className="font-normal">{title ?? ""}:</span>
                      <span>{subtitle ?? ""}</span>
                    </li>
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        );
      })}
    </>
  );
}
