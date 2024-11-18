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
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
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
