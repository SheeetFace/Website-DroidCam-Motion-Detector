export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DroidCam Motion Detector",
  defaultDescription:
    "Turn your smartphone into a reliable security camera with motion detection, customizable alerts, and integrations with Telegram and Discord for real-time monitoring.",
  defaultKeywords:
    "motion detection, security app, smartphone surveillance, home monitoring system, real-time alerts, motion tracking, phone security camera, DroidCam monitoring, smart home security, app for surveillance",
  pages: {
    home: {
      title: "DroidCam Motion Detector - Smart Security for Your Phone",
      description:
        "Turn your smartphone into a reliable motion detection system with instant alerts, advanced monitoring features, and integrations with Telegram and Discord for enhanced security.",
      keywords:
        "smartphone security camera, motion detection app, home monitoring, real-time alerts, DroidCam motion detector, motion tracking system",
    },
    features: {
      title: "Features - DroidCam Motion Detector",
      description:
        "Explore advanced features of DroidCam Motion Detector, including motion tracking, customizable notification sounds, area selection tools, and seamless platform integrations.",
      keywords:
        "motion tracking, security notifications, customizable alerts, DroidCam features, advanced monitoring tools, app integrations",
    },
    faq: {
      title: "FAQ - DroidCam Motion Detector",
      description:
        "Find answers to common questions about installing, setting up, and using DroidCam Motion Detector for effective home monitoring and security.",
      keywords:
        "DroidCam FAQ, motion detection guide, security app setup, troubleshooting DroidCam, home surveillance questions",
    },
    about: {
      title: "About - DroidCam Motion Detector",
      description:
        "Discover DroidCam Motion Detector, a cutting-edge app designed to transform your phone into a powerful motion detection system for enhanced home security.",
      keywords:
        "about DroidCam, motion detection technology, phone surveillance app, smart security app, home monitoring solution",
    },
    integrations: {
      title: "Integrations - DroidCam Motion Detector",
      description:
        "Seamlessly connect DroidCam Motion Detector with platforms like Telegram and Discord to receive real-time alerts, screenshots, and advanced notifications.",
      keywords:
        "DroidCam integrations, Telegram security alerts, Discord notifications, motion alert systems, platform connectivity for monitoring",
    },
  },
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
  integrations: [
    {
      id: "TELEGRAM-bot",
      title: "Telegram Bot Integration",
      titleColor: "text-cyan-500",
      description: "How to create and connect Telegram bot to your application",
      platform: "telegram",
      difficulty: "medium",
      timeEstimate: "5 minutes",
      requirements: ["Telegram account", "Ethernet"],
      steps: [
        {
          id: "step-1",
          type: "heading",
          content: "1. Create a New Bot with BotFather",
        },
        {
          id: "step-1-1",
          type: "textWith",
          content: "Open Telegram and search @BotFather",
        },
        {
          id: "step-1-1-1",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733392542/g0jdwwgvo1g14y7p6wqx.webp",
          additionalInfo: {
            imageAlt: "BotFather bot search instructions",
          },
        },
        {
          id: "step-1-1-2",
          type: "warning",
          content:
            "Note that it was an official bot that has a verification badge.",
          additionalInfo: {
            colorScheme: "info",
          },
        },
        {
          id: "step-1-2",
          type: "text",
          content: "Open a dialog with the bot.",
        },
        {
          id: "step-1-3",
          type: "textWith",
          content:
            "Click on the Menu button and select /newbot to create a new bot.",
        },
        {
          id: "step-1-3-1",
          type: "image",
          content:
            " https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1732968093/pyf0nfbzj0kxnzczogid.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing how to click on the Menu button and select the /newbot command to create a new bot.",
          },
        },
        {
          id: "step-1-4",
          type: "text",
          content:
            "Now we're asked to name our new bot. The hardest part is coming up with a name.",
        },
        {
          id: "step-1-4-1",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733051175/g8pmibfdegqwqjeu6jwg.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing where we are asked to come up with a name for our bot.",
          },
        },
        {
          id: "step-1-5",
          type: "text",
          content:
            "All right, we've come up with a name for our bot. Almost done. 🤗",
        },
        {
          id: "step-1-5-1",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733052385/vouswleexluy7dim5jng.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing where we came up with the name of our new bot. ",
          },
        },
        {
          id: "step-1-6",
          type: "text",
          content: "Now we are asked to give our bot a username.",
        },
        {
          id: "step-1-6-1",
          type: "warningWith",
          content:
            "Note that the username of our bot must have the ending <Bot> or <_bot>",
          additionalInfo: {
            colorScheme: "warning",
          },
        },
        {
          id: "step-1-6-2",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733123876/kceatswe4v97p7bggvld.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing where we created our bot with the bot's username and his TOKEN.",
          },
        },
        {
          id: "step-1-7",
          type: "textWith",
          content:
            "Great. Now we have a bot with <TOKEN> and username @AlertsForDCMDBot that will send us screenshots to our group (we'll create it a bit later).",
        },
        {
          id: "step-1-7-1",
          type: "warningWith",
          content:
            "Keep your <TOKEN> secure and store it safely, it can be used by anyone to control your bot. DroidCam Motion Detector stores your data locally on our computer and does not send this data anywhere else.",
          additionalInfo: {
            colorScheme: "info",
          },
        },
        {
          id: "step-2",
          type: "heading",
          content: "2. Create a new group.",
        },
        {
          id: "step-2-1",
          type: "textWith",
          content:
            "Create a new group (a group, not a channel). I called it <Group+for+Alerts> . In the window where you will be asked to add contacts, don't add anyone and just click Create.",
        },
        {
          id: "step-2-1-1",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733127688/tqqkwxufirugi3ztoz17.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing where we create a new group.",
          },
        },
        {
          id: "step-2-1-2",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733127691/rvsbwh77dgi7qdnq9kgl.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing where we give the name for our new group.",
          },
        },
        {
          id: "step-2-1-3",
          type: "text",
          content: "The group is created, we can move on to the next step.",
        },

        {
          id: "step-3",
          type: "heading",
          content: "3. Add our bot to the group using username.",
        },
        {
          id: "step-3-1",
          type: "text",
          content:
            "Open a dialog with in our group and click on the area of the name.",
        },
        {
          id: "step-3-1-1",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733129919/c9kmuwj7fxkvpwxswkkz.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing where to click to open a window with a list of users.",
          },
        },
        {
          id: "step-3-2",
          type: "text",
          content: "Click on the icon to add a user to the group.",
        },
        {
          id: "step-3-2-1",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733129922/shp5cqnqh7pstwh2tiiw.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing where to click to open a window with a list of users.",
          },
        },
        {
          id: "step-3-3",
          type: "textWith",
          content:
            "In input search for our previously created bot using username in my case its @AlertsForDCMDBot",
        },
        {
          id: "step-3-3-1",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733129926/asq784vebllegpggmpjk.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing input where to enter the username of our bot to add it to the group.",
          },
        },
        {
          id: "step-3-3-2",
          type: "textWith",
          content:
            "Great, we have <TOKEN> and the bot itself added to the group. To get notifications, all that's left is to find out what the <ID> of our group is.",
        },
        {
          id: "step-4",
          type: "heading",
          content: "4. Let's find out our group ID.",
        },
        {
          id: "step-4-1",
          type: "textWith",
          content:
            "To find out the <ID> of our group, we will use the third-party bot @GetChatID_IL_BOT , which will give us the <ID>",
        },
        {
          id: "step-4-1-2",
          type: "textWith",
          content:
            "To do this, we repeat the same thing we did when we added our bot @AlertsForDCMDBot to the group, only now we add someone else's bot @GetChatID_IL_BOT .",
        },
        {
          id: "step-4-1-3",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733131983/dovzdc9u587pb0svxn5y.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing input where to enter the username of someone else's bot to add it to the group.",
          },
        },
        {
          id: "step-4-2",
          type: "textWith",
          content:
            "After adding @GetChatID_IL_BOT to our group, click on the button to invoke the command of this bot",
        },
        {
          id: "step-4-2-2",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733132160/rxl8rb6ka0ehqy6nhw5p.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing where to click to open commands for the bot.",
          },
        },
        {
          id: "step-4-3",
          type: "textWith",
          content:
            "After clicking on this button you should be shown the available commands for this bot. We need the /id@GetChatID_IL_BOT command",
        },
        {
          id: "step-4-3-2",
          type: "warningWith",
          content:
            "If after clicking on this button we have no commands available. Then you just need to click on any other chat, group, channel, whatever and then click on this button again. That usually works.",
          additionalInfo: {
            colorScheme: "warning",
          },
        },
        {
          id: "step-4-3-3",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733132484/zwotdzzx1v4deyxfrv5i.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing commands for the bot.",
          },
        },
        {
          id: "step-4-3-4",
          type: "textWith",
          content:
            "After calling the /id@GetChatID_IL_BOT command, we should immediately get a response with <CHAT_ID> , which is what we need to integrate with the application. Just click on these numbers to copy this <CHAT_ID>",
        },
        {
          id: "step-4-3-5",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733133785/fvzg89s8w83bnyye7dxa.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Telegram interface showing our CHAT_ID.",
          },
        },
        {
          id: "step-4-3-6",
          type: "warningWith",
          content: "Be careful not to copy the first space before <CHAT_ID>",
          additionalInfo: {
            colorScheme: "warning",
          },
        },
        {
          id: "step-4-3-7",
          type: "textWith",
          content:
            "Now we can remove @GetChatID_IL_BOT from our group, we won't need it anymore.",
        },
        {
          id: "step-4-4",
          type: "textWith",
          content:
            "Everything is ready, all that is left is to enter our <TOKEN> and <CHAT_ID> in the app settings. ",
        },
        {
          id: "step-5",
          type: "heading",
          content:
            "5. Enter TOKEN and CHAT_ID in DroidCam Motion Detector settings.",
        },
        {
          id: "step-5-2",
          type: "textWith",
          content:
            "Enter <TOKEN> in the first input, and <CHAT_ID> in the second input in the settings of DriodCam Motion Detector.",
        },
        {
          id: "step-5-2-2",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733136032/twnguxbcwd3z4whzimxw.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot which shows where to enter TOKEN and CHAT_ID in DroidCam Motion Detector app.",
          },
        },
        {
          id: "step-5-3",
          type: "text",
          content: "🎉 Congratulations, it's all done! 🎉",
        },
      ],
    },
    {
      id: "DISCORD-bot",
      title: "DISCORD Bot Integration",
      titleColor: "text-indigo-600",
      description: "How to create and connect Discord bot to your application",
      platform: "discord",
      difficulty: "easy",
      timeEstimate: "2 minutes",
      requirements: ["Discord account", "Ethernet"],
      steps: [
        {
          id: "step-0",
          type: "warningWith",
          content:
            "I'm using the web version of Discord, if you're using the desktop app, something may be different visually. But the essence doesn't change.",
          additionalInfo: {
            colorScheme: "warning",
          },
        },
        {
          id: "step-1",
          type: "heading",
          content: "1. Add a new server",
        },
        {
          id: "step-1-1",
          type: "textWith",
          content:
            " Click on the icon with PLUS then select <Create+my+Own> --> <For+me+and+my+friends> give names for our server, in my case <Server+For+Alerts>",
        },
        {
          id: "step-1-2",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733211449/xyw05bjgpl1g6jv3zgf1.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Discord interface where the user clicks on the plus icon, selects 'Create my Own' and 'For me and my friends'   then names as 'Server For Alerts'.",
          },
        },

        {
          id: "step-2",
          type: "heading",
          content: "2. Select a channel",
        },
        {
          id: "step-2-1",
          type: "textWith",
          content:
            "The server is ready, now select the channel where notifications will be sent. In my case I choose the already created automatically <general> (but you can create a new one). Click on the <Edit+Channel> button.",
        },
        {
          id: "step-2-2",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733212676/gkfas1edaqdo1nbfhwea.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Discord interface, where the server is ready. The user selects a channel to send notifications, in this case the automatically created general. Then the user clicks on the Edit Channel button.",
          },
        },
        {
          id: "step-3",
          type: "heading",
          content: "3. Create a New Webhook",
        },
        {
          id: "step-3-1",
          type: "textWith",
          content:
            "In the opened settings, select <+Integrations> and <+Webhooks> .",
        },
        {
          id: "step-3-2",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733213552/wgsw44ydvtjwvp6x1hil.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Discord interface with open settings where the user selects the Integrations and Webhooks sections.",
          },
        },
        {
          id: "step-3-3",
          type: "textWith",
          content:
            "Next, create a new <Webhook> by clicking on the <New+Webhook> button. After that a new <Webhook> is created, in my case it has the name <Captain+Hook>",
        },

        {
          id: "step-3-4",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733214214/uzupvecl2zgpmcwfljmj.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Discord interface, where the user creates a new Webhook by clicking on the New Webhook button. Then a new Webhook is created, in this case with the name Captain Hook.",
          },
        },
        {
          id: "step-3-5",
          type: "textWith",
          content:
            "After clicking on our new <Webhook> called <Captain+Hook> we see the settings. Here you can change its name and picture and channel, I leave everything as it is. Then click on the <Copy+Webhook+URL> button.",
        },
        {
          id: "step-3-6",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733215212/yk5zaahylr4r4wzrmtff.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Discord settings of a new Webhook called Captain Hook where you can change its name, image and channel. The user leaves the settings unchanged and clicks on the Copy Webhook URL button.",
          },
        },
        {
          id: "step-3-7",
          type: "warningWith",
          content:
            "Keep your <Webhook> secure and store it safely, it can be used by anyone to control your bot. DroidCam Motion Detector stores your data locally on our computer and does not send this data anywhere else.   ",
          additionalInfo: {
            colorScheme: "info",
          },
        },
        {
          id: "step-4",
          type: "heading",
          content: "4. Enter Webhook in DroidCam Motion Detector settings.",
        },
        {
          id: "step-4-1",
          type: "textWith",
          content:
            "After copying <Webhook> go to the application settings and paste <Webhook> into the input and press <Apply> and you're done! 🎉",
        },
        {
          id: "step-4-2",
          type: "image",
          content:
            "https://res.cloudinary.com/dof771xd5/image/upload/f_webp/v1733215602/ryn9de2johzczastq5fo.webp",
          additionalInfo: {
            imageAlt:
              "Screenshot of the Discord interface where the user pastes the copied Webhook into the appropriate settings field and clicks Apply, completing the customization process.",
          },
        },
      ],
    },
  ],
};
