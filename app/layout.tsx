import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { button as buttonStyles } from "@nextui-org/theme";

import {
  KoFiIcon,
  OpenCollectiveIcon,
  GithubIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen ">
            <Navbar />
            <main className="container mx-auto max-w-12xl pt-1 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full h-48 flex flex-col justify-between gap-1 bg-black">
              <div className="flex justify-center gap-3">
                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "flat",
                    radius: "full",
                    color: "success",
                  })}
                  href={siteConfig.links.koFi}
                >
                  <KoFiIcon size={20} />
                  Ko-Fi
                </Link>

                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "flat",
                    radius: "full",
                    color: "success",
                  })}
                  href={siteConfig.links.openCollective}
                >
                  <OpenCollectiveIcon size={20} />
                  Open Collective
                </Link>

                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "flat",
                    radius: "full",
                    color: "success",
                  })}
                  href={siteConfig.links.github}
                >
                  <GithubIcon size={20} />
                  GitHub
                </Link>
              </div>

              <div className="flex justify-end gap-1 text-current mr-2">
                <span className="text-xs text-inherit">Created by</span>
                <span className="text-xs text-green-400">SheeetFace</span>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
