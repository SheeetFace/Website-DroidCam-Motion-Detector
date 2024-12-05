import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import AuthorTagFooter from "@/components/footer/AuthorTagFooter";
import LinksFooter from "@/components/footer/LinksFooter";
import AbstractParticles from "@/components/canvas/AbstractParticles";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.ico",
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
          <div className="relative flex flex-col h-screen">
            <AbstractParticles />
            <Navbar />
            <main className="container mx-auto max-w-12xl  px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full h-48 flex flex-col justify-between">
              <div className="flex justify-center">
                <div className="flex container">
                  <LinksFooter />
                </div>
              </div>
              <AuthorTagFooter />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
