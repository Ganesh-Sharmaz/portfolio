import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  sourceHref?: string;
  liveHref?: string;
};

const mockProjects: ProjectItem[] = [
  {
    title: "Truetym – MSME HR & Payroll Platform",
    description:
      "Enterprise HR & payroll platform for MSMEs with RBAC, payroll workflows, secure auth, and performance-optimized dashboards.",
    tags: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "NextAuth",
      "Razorpay",
      "FIDO2",
      "HR Tech",
    ],
    liveHref: "https://truetym-ui.vercel.app/",
  },
  {
    title: "Babbler – WhatsApp Bulk Messaging SaaS",
    description:
      "WATI-like WhatsApp SaaS enabling template creation, campaigns, contact segmentation, and real-time chat using WebSockets and Meta APIs.",
    tags: [
      "Next.js",
      "WebSockets",
      "WhatsApp Cloud API",
      "Meta Business API",
      "RBAC",
      "SaaS",
    ],
    liveHref: "https://babbler.makunaiglobal.ai/dashboard",
  },
  {
    title: "College Hai – Public SEO Platform",
    description:
      "SEO-first education platform with exams, news, blogs, and dynamic content. Built with SSR, metadata optimization, and performance-focused UI.",
    tags: ["Next.js", "SEO", "SSR", "JSON-LD", "Lighthouse", "Vercel"],
    sourceHref: "https://collegehai.com/",
    liveHref: "https://collegehai.com/",
  },
  {
    title: "SHNK – Dev Task Automation CLI",
    description:
      "Python CLI that scaffolds projects (React + Tailwind, Next.js soon), configures deps, and launches dev servers.",
    tags: ["Python", "CLI", "Automation", "Scaffolding"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/SHNK",
    liveHref: "https://sourceforge.net/projects/shnk/",
  },
  {
    title: "Yapper AI – Multi‑Persona Chatbot",
    description:
      "React + Tailwind app using Gemini Flash 1.5 with Firebase auth and markdown rendering for rich chat.",
    tags: ["React", "Tailwind", "Firebase", "Gemini", "Vercel"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/YapperAI",
    liveHref: "https://yapper-ai.vercel.app/",
  },
  {
    title: "StorageBuddy – Unified Web Storage SDK",
    description:
      "Zero‑dependency TS library that unifies localStorage, sessionStorage, and cookies with typed APIs.",
    tags: ["TypeScript", "Library", "LocalStorage", "SessionStorage", "Cookies", "npm"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/StorageBuddy",
    liveHref: "https://www.npmjs.com/package/storagebuddy",
  },
  {
    title: "StorageBuddy - Documentation",
    description:
      "Official documentation hub for StorageBuddy with guides, API refs, and examples.",
    tags: ["Docs", "TypeScript", "NextJS", "Framer"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/StorageBuddyDocs",
  },
  {
    title: "GrabTube – YouTube Downloader (Frontend)",
    description:
      "React frontend for downloading YouTube videos; integrates Flask backend, yt‑dlp and FFmpeg.",
    tags: ["React", "yt-dlp", "FFmpeg", "Vercel"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/GrabTubeFrontend",
    liveHref: "https://grab-tube.vercel.app/",
  },
  {
    title: "GrabTube – Backend (Flask)",
    description:
      "Flask backend powering GrabTube video download and muxing via yt‑dlp and FFmpeg.",
    tags: ["Python", "Flask", "yt-dlp", "FFmpeg"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/GrabTubeBackend",
  },
  {
    title: "Groovy – Spotify‑like Music App",
    description:
      "Music web app with responsive grid, search, and dynamic loading built with React + Tailwind.",
    tags: ["React", "Tailwind", "Music", "Vercel"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/SpotifyClone",
    liveHref: "https://groovy-nine.vercel.app/",
  },
];

const ProjectBox = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-6">
      {mockProjects.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          description={p.description}
          tags={p.tags}
          sourceHref={p.sourceHref}
          liveHref={p.liveHref}
        />
      ))}
    </div>
  );
};

export default ProjectBox;
