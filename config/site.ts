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
    {
      label: "Integrations",
      href: "/integrations",
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
    {
      label: "Integrations",
      href: "/integrations",
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
  features: [
    {
      title: "Movement Monitoring",
      items: [
        "Movement Threshold: Defines the minimum movement that will be registered as motion. The smaller the value, the more sensitive the detector will be to the slightest movements. The larger the value, the greater the movement required to register.",
        "Distance Threshold: This setting specifies the smallest distance between borders at which they should be considered merged into one. The smaller the value, the closer the objects need to be to be regarded as a single unit.",
        "Frame Skip: Sets the number of frames to skip between processing to improve performance.",
        "Disable Motion Tracking: Allows temporarily disabling the motion tracking feature.",
      ],
    },
    {
      title: "Image Settings",
      items: [
        "Brightness: Adjust the brightness level of the image.",
        "Contrast: Adjust the contrast level of the image.",
        "Sharpness: Adjust the sharpness level of the image.",
      ],
    },
    {
      title: "Notifications",
      items: [
        "Alert Interval: Configure the frequency of alerts in seconds.",
        "Alert Volume: Adjust the volume of alert sounds.",
        "Notification Interval Settings: Configure the frequency of notifications in Telegram and Discord.",
      ],
    },
    {
      title: "Styles",
      items: [
        "Border Colors: Adjust the border colors for object tracking in the camera.",
        "Border Thickness: Adjust the thickness of the border.",
      ],
    },
    {
      title: "Integrations",
      items: [
        "Discord Webhook URL: Configure the URL for integration with Discord.",
        "Telegram Settings: Configure notifications and screenshot features.",
        "Snapshot: Allows sending screenshots at specific time intervals.",
      ],
    },
    {
      title: "Full DroidCam Functionality",
      items: [
        "Zoom: Ability to zoom in and out.",
        "Auto Focus: Configure autofocus for optimal image quality.",
        "Screenshots: Take screenshots at any time (saved on the phone).",
        "Flashlight: Enable the flashlight to improve lighting.",
        "Battery: Display the phone's battery level on the screen.",
      ],
    },
    {
      title: "Additional Features",
      items: [
        "Resizable Window: Ability to resize the application window for convenience.",
        "Always on Top: Keep the application on top of all windows for constant monitoring.",
      ],
    },
    {
      title: "No Internet Connection Required",
      items: [
        "Internet Not Required: (except for integrations with Discord and Telegram), it's enough to be on the same Wi-Fi network.",
      ],
    },
  ],
};
