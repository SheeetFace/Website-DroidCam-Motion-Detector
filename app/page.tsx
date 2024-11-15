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
        <span className={title({ color: "green" })}>DroidCam Motion Detector</span>
        <br />
        <span className="mt-2 text-lg">
          Transform your phone with the DroidCam app into a motion monitoring system, getting real-time information about any changes in space.
        </span>
        <br />
        <span className="mt-2 text-base">
          In addition to all the standard DroidCam features, you can also customize sounds and area selection styles, and integrate the app with <span className="text-indigo-500 text-lg">Discord</span> and <span className="text-cyan-400 text-lg">Telegram</span> for real-time screenshots and notifications.
        </span>
      </div>
    </section>
  );
}
