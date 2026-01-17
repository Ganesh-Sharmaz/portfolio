import Link from "next/link";
import React from "react";

type Project = {
  title: string;
  timeRange: string;
  bullets: string[];
  links?: { label: string; href: string }[];
};

type Experience = {
  role: string;
  id: number;
  company: string;
  companyLink?: string;
  location: string;
  duration: string;
  techTags: string[];
  projects: Project[];
};


const experiences: Experience[] = [
  {
    role: "Associate Software Developer",
    id: 1,
    company: "Truetym Inc.",
    companyLink: "https://truetym.com",
    location: "Noida, India",
    duration: "Nov 13, 2025 – Present",
    techTags: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "NextAuth",
      "Razorpay",
      "FIDO2",
      "RBAC",
      "REST APIs",
    ],
    projects: [
      {
        title: "Truetym – MSME HR & Payroll Platform",
        timeRange: "Nov 13, 2025 – Present",
        bullets: [
          "Revamped the frontend by migrating the product from Angular to Next.js, reducing page load time by ~2 seconds.",
          "Built and scaled a modern HR & Payroll dashboard using Next.js, React, and TypeScript.",
          "Implemented role-based access control (RBAC) across employees, attendance, payroll, finance, and documents.",
          "Developed payroll workflows including salary structures, deductions, payouts, and payroll data views.",
          "Integrated Razorpay for subscriptions and payment flows with proper UI states and error handling.",
          "Implemented passwordless authentication using FIDO2 to improve security and login experience.",
          "Used TanStack Query caching and background refetching for faster page transitions.",
          "Optimized UI performance using memoization, lazy loading, and code-splitting.",
        ],
      },
    ],
  },
  {
    role: "Associate Software Developer",
    id: 2,
    company: "Makunai Global Pvt. Ltd.",
    companyLink: "https://www.makunaiglobal.ai/",
    location: "WTT, Sector-16, Noida, 201301",
    duration: "Oct 10, 2025 – Nov 10, 2025",
    techTags: [
      "Next.js",
      "WebSockets",
      "NextAuth",
      "WhatsApp Cloud API",
      "Meta Business API",
      "CSV Processing",
    ],
    projects: [
      {
        title: "Babbler – WhatsApp Bulk Messaging Platform",
        timeRange: "Oct 10, 2025 – Nov 10, 2025",
        bullets: [
          "Built a WhatsApp bulk messaging SaaS similar to WATI / Interakt for campaign automation.",
          "Integrated WhatsApp Embedded Signup using the Meta Business API for seamless onboarding.",
          "Developed real-time chat using WebSockets with typing indicators, read receipts, and multi-agent updates.",
          "Engineered template creation with real-time preview, validation, and bulk message sending.",
          "Implemented campaign creation with scheduling, delivery status, and error handling.",
          "Built contact management with bulk CSV import and tag-based segmentation.",
          "Implemented server-side paginated DataTables handling 10k+ records.",
          "Improved UI responsiveness by ~40% using debouncing, memoization, and code-splitting.",
        ],
        links: [
          { label: "Babbler", href: "https://www.babbler.makunaiglobal.ai" },
          { label: "Console", href: "https://console.makunaiglobal.ai" },
        ],
      },
    ],
  },
  {
    role: "Frontend Developer Intern",
    id: 3,
    company: "Makunai Global Pvt. Ltd.",
    companyLink: "https://www.makunaiglobal.ai/",
    location: "WTT, Sector-16, Noida, 201301",
    duration: "March 10, 2025 – June 15, 2025",
    techTags: [
      "Next.js",
      "TypeScript",
      "SEO",
      "SSR",
      "Redux",
      "JIRA",
      "Jest",
      "ESLint",
      "Husky",
      "REST APIs",
      "Lighthouse",
    ],
    projects: [
      {
        title: "College Hai – Public SEO Platform",
        timeRange: "March 10, 2025 – June 15, 2025",
        bullets: [
          "Shipped SEO-friendly pages with optimized metadata, JSON-LD, and server-side rendering (SSR) to improve search rankings.",
          "Implemented exam and news modules with category filters, infinite scroll, and optimized API requests.",
          "Developed a dynamic blog system with image optimization, prefetching, and Next.js Image.",
          "Built responsive and accessible UI components, improving Lighthouse scores from 65 to 92+.",
          "Integrated ad management for banners with zero layout shifts and improved CLS.",
        ],
        links: [
          { label: "collegehai.com", href: "https://collegehai.com/" },
        ],
      },
      {
        title: "College Hai Admin-UI – CRM for Admissions & Leads",
        timeRange: "March 10, 2025 – June 15, 2025",
        bullets: [
          "Developed scalable lead management dashboards with advanced search, filters, and status tracking, reducing data retrieval time by ~50%.",
          "Migrated the application from Next.js 14 to 15, improving LCP, CLS, and INP metrics and reducing page load times by 30%+.",
          "Implemented frontend caching strategies to reduce API load while preserving real-time data accuracy.",
          "Built partner management dashboards handling thousands of records with efficient pagination and sorting.",
          "Collaborated in an agile environment using JIRA; participated in standups, sprint planning, and retrospectives.",
          "Resolved production issues, shipped hotfixes, and optimized data fetching strategies.",
          "Authored Jest tests and enforced code quality using ESLint and Husky.",
        ],
      },
    ],
  }
];


const ExperienceBox = () => {
  return (
    <div className="space-y-12 ml-2">
      <div className="relative pl-8 border-l-2 border-[#D1D4CD] dark:border-[#2E455D]">
        {experiences.map((exp) => (<div key={exp.id} className="relative">
          <div className="absolute left-[-41px] top-0 w-4 h-4 rounded-full bg-[#2E455D] dark:bg-[#D1D4CD] border-2 border-white dark:border-[#1D2D44]" />
          <div key={exp.company} className="mb-12">
            {/* Role + Company */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <h3 className="text-lg font-medium text-[#0D1321] dark:text-white">
                {exp.role}{" "}
                <Link
                  href={exp.companyLink || "#"}
                  className="font-semibold text-[#1D2D44] dark:text-[#D1D4CD]"
                >
                  @ {exp.company}
                </Link>
              </h3>

              <span className="text-sm text-[#0D1321]/70 dark:text-white/70 mt-2 md:mt-0">
                {exp.duration}
              </span>
            </div>

            <div className="text-xs text-[#0D1321]/70 dark:text-white/70 mb-3">
              {exp.location}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap mb-4">
              {exp.techTags.map((t) => (
                <span
                  key={t}
                  className="inline-block px-3 py-1 text-xs bg-[#D1D4CD] dark:bg-[#2E455D] rounded-full mr-2 mb-2"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Projects */}
            {exp.projects.map((project) => (
              <div key={project.title} className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h4 className="font-medium text-[#0D1321] dark:text-white">
                    {project.title}
                  </h4>

                  <span className="rounded px-2 py-0.5 text-[10px] bg-[#E1E0D3] dark:bg-[#2E455D]">
                    {project.timeRange}
                  </span>

                  {project.links?.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-900 text-xs"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>

                <ul className="space-y-1 text-[#0D1321]/80 dark:text-white/80">
                  {project.bullets.map((b) => (
                    <li key={b.slice(0, 40)} className="flex">
                      <span className="mr-2">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};


export default ExperienceBox;
