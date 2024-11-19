export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/SheeetFace/DroidCam-Motion-Detector",
    koFi: "https://ko-fi.com/sheeetface",
    openCollective: "https://opencollective.com/",
  },
  downloadVersions: [
    {
      title: "DroidCamMotionDetector-Setup.exe",
      size: "~40MB",
      type: "Windows installer (Squirrel)",
      features: [
        "Standard Windows Installer",
        "Automatic installation in AppData (Local Disk C)",
        "Create shortcuts on the desktop",
        "Display in the list of installed programs",
        "Can be uninstalled via Control Panel",
      ],
      downloadUrl: "/downloads/DroidCamMotionDetector-Setup.zip",
    },
    {
      title: "DroidCamMotionDetector-Portable.zip",
      size: "~120MB",
      type: "Portable version (Recommended)",
      features: [
        "No installation required",
        "Can run from any location",
        "USB drive compatible",
        "Run via DroidCam Motion Detector.exe",
        "Remove by deleting folder",
      ],
      downloadUrl: "/downloads/DroidCamMotionDetector-Portable.zip",
    },
  ],
};
