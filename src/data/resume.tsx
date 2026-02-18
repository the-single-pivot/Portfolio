import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { KotlinLight } from "@/components/ui/svgs/kotlinLight";
import { JetpackCompose } from "@/components/ui/svgs/jetpackCompose";
import { Ktor } from "@/components/ui/svgs/ktor";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ajith C Davis",
  initials: "AD",
  url: "https://dillion.io",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539456,77.4661272,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9628669!4d77.577509!16zL20vMDljMTc?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
  description:
    "I build Android apps that scale… and occasionally enter heated debates with Gradle.",
  summary:
    "Since graduating in 2022, I’ve engineered and scaled Android applications, contributing to products serving millions of users while also architecting 0 to 1 systems, driven by a genuine passion for building apps that are clean, scalable, and built to last",
  avatarUrl: "/me.png",
  skills: [
    { name: "Kotlin", icon: KotlinLight },
    { name: "Jetpack Compose", icon: JetpackCompose },
    { name: "Ktor", icon: Ktor },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Glance AI",
      href: "https://glance.com/",
      badges: [],
      location: "Banglore, India",
      title: "SDE II (Android)",
      logoUrl: "/glance.png",
      start: "September 2025",
      end: "present",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Incred Finance",
      href: "https://li.me/",
      badges: [],
      location: "Banglore, India",
      title: "Software Engineer",
      logoUrl: "/incred.png",
      start: "November 2024",
      end: "September 2025",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Samsung",
      href: "https://www.samsung.com/us/apps/samsung-health/",
      badges: [],
      location: "Noida, India",
      title: "Research and Development Engineer",
      logoUrl: "/samsung.png",
      start: "June 2022",
      end: "September 2024",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "SRM Institute of Science and Technology",
      href: "https://buildspace.so",
      degree: "Btech in Computer Science and Engineering",
      logoUrl: "/srm.svg",
      start: "2018",
      end: "2022",
    },
    {
      school: "Devamatha CMI School",
      href: "https://uwaterloo.ca",
      degree: "Senior Secondary",
      logoUrl: "/devamatha.png",
      start: "2016",
      end: "2018",
    }
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  apps: [
    {
      title: "Samsung Health",
      href: "https://play.google.com/store/apps/details?id=com.sec.android.app.shealth&hl=en_IN",
      description: "Health & fitness tracking — steps, workouts, sleep, and wellness by Samsung.",
      logoUrl: "/health.png",
      downloads: "1B+",
    },
    {
      title: "Glance – Shop with AI",
      href: "https://play.google.com/store/apps/details?id=com.glance.ai&hl=en_IN",
      description: "AI-powered personalized shopping feed. Styled looks and curated collections from a selfie.",
      logoUrl: "/glance.png",
      downloads: "100K+",
    },
    {
      title: "Algebrik AI",
      href: "https://www.algebrik.com",
      description: "AI-powered loan origination and lending platform for financial institutions.",
      logoUrl: "https://www.google.com/s2/favicons?domain=algebrik.com&sz=128",
    },
  ],
} as const;
