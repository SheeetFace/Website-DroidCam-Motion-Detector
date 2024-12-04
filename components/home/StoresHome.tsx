import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function StoresHome() {
  return (
    <motion.section
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-1 w-full items-start max-xl:items-center"
      initial={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
    >
      <span className="text-sm font-thin">
        Official mobile DroidCam apps here
      </span>
      <div className="flex gap-2">
        <Link
          isExternal
          className="hover:opacity-85 opacity-85"
          href="https://play.google.com/store/apps/developer?id=Dev47Apps"
        >
          <Image
            alt="Google Play Store"
            height={40}
            radius="none"
            src="/store-icons/googlePlay.webp"
            width={120}
          />
        </Link>

        <Link
          isExternal
          className="hover:opacity-85 opacity-85"
          href="https://apps.apple.com/us/developer/dev47apps/id1510258101"
        >
          <Image
            alt="Apple Store"
            height={41}
            radius="none"
            src="/store-icons/appleStore.webp"
            width={120}
          />
        </Link>
      </div>
    </motion.section>
  );
}
