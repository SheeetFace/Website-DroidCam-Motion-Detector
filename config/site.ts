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
  faq: [
    {
      title: "What is DroidCam Motion Detector?",
      content:
        "This is an app that converts your phone with the DroidCam app on your phone into a motion monitoring system. It highlights active areas in real time and can notify you with an audible alert and send screenshots of the motion to you in Telegram or Discord.",
    },
    {
      title: "Is the app free?",
      content:
        "Yes, DroidCam Motion Detector is free. But you can always donate for the development of the project.",
    },
    {
      title: "Where can I download an app for my phone?",
      content:
        "You can download the DroidCam app for your phone from the official DroidCam website or through the Google Play and Apple App Stores.",
    },
    {
      title: "How do I connect my phone to my computer?",
      content:
        "1. Install the DroidCam app on your phone. 2. Launch the application on your phone and computer. 3. Follow the instructions in the app to connect via Wi-Fi (by simply entering the IP and PORT from the phone screen in the app settings on your computer).",
    },
    {
      title: "Can I get notifications on my phone?",
      content:
        "Yes, you can integrate the app with Telegram and Discord to get real-time notifications and screenshots by selecting the interval of these notifications.",
    },
    {
      title:
        "Can I use all the features from the official DroidCam app such as zoom, flashlight and screenshots?",
      content:
        "Yes, you can use all the features from the official DroidCam app, including zooming in, turning on the flashlight and taking screenshots and so on. However, at the moment our app does not provide USB connection and audio (we plan to add audio capability in the future).",
    },
    {
      title: "How much does the application use your computer's resources?",
      content:
        "DroidCam Motion Detector is designed to be flexible in utilizing your computer resources. If you have a powerful computer, you can enjoy a smooth picture with high frames per second. However, if you need to minimize the load on your system, you can reduce the FPS by adjusting the 'Frame Skip' option in the application settings, which will result in a significant reduction in resource consumption. Thus, you can customize the application to suit your needs and the capabilities of your computer.",
    },
    {
      title: "Can I use my old phone for monitoring?",
      content:
        "Yes, using your old phone as a camera is an ideal solution. This will allow you to save money and use the device efficiently.",
    },
    {
      title: "What operating systems are supported?",
      content:
        "The app supports Windows and macOS. Android or iOS is required to use DroidCam on your phone.",
    },
    {
      title: "How do I report a bug or suggestion?",
      content: "You can use the feedback form on our About page.",
    },
  ],
};
