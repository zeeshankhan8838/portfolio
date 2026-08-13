export const personalInfo = {
  name: "ZEESHAN KHAN",
  firstName: "Zeeshan",
  title: "Full Stack Developer",
  tagline: "Senior Software Engineer · Agentic AI · Enterprise Web Systems",
  location: "Islamabad, Pakistan",
  phone: "+92 318 3008838",
  email: "zeeshankhan8838@gmail.com",
  linkedin: "https://linkedin.com/in/zeeshan8838",
  github: "https://github.com/",
  medium: "https://medium.com/@zeeshankhan8838",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/zeeshan8838",
    email: "mailto:zeeshankhan8838@gmail.com",
    phone: "tel:+923183008838",
  },
  profile:
    "Senior Software Engineer with 6+ years building enterprise-grade web applications and applied AI systems for global clients including Halliburton and Extreme Networks. Deep expertise in Angular and React for large-scale production frontend architecture, paired with Next.js, Node.js, FastAPI, and ASP.NET Core across the stack. Currently focused on agentic AI — LLM-powered features, RAG pipelines, and multi-tool AI agents using LangChain and MCP. Mentors 2-4 engineers and leads architecture reviews while owning end-to-end delivery of microfrontend systems and real-time applications across cross-functional Agile teams.",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Global Clients", value: "10+" },
    { label: "Projects Delivered", value: "30+" },
    { label: "Engineers Mentored", value: "2-4" },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Native" },
  ],
};

export const skills = [
  {
    category: "AI & Agentic Systems",
    icon: "Brain",
    items: [
      "LLMs",
      "AI Agents",
      "Agentic Workflows",
      "RAG",
      "LangChain",
      "MCP",
      "Prompt Engineering",
    ],
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      "Angular",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "NgRx",
      "Single-SPA",
      "Nx Monorepo",
      "PWA",
      "REST APIs",
    ],
  },
  {
    category: "Backend & Data",
    icon: "Server",
    items: [
      "Node.js",
      "FastAPI",
      "ASP.NET Core",
      "GraphQL",
      "SQL",
      "NoSQL",
      "WebSockets",
      "SignalR",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    items: ["Docker", "GitHub Actions", "GitLab CI/CD", "Azure", "AWS", "Nginx"],
  },
  {
    category: "Visualization & Practices",
    icon: "BarChart3",
    items: [
      "Highcharts",
      "ECharts",
      "Agile/Scrum",
      "Code Review",
      "Mentoring",
      "Git",
    ],
  },
];

export const experience = [
  {
    company: "Emumba",
    role: "Senior Software Engineer I",
    period: "May 2025 – Present",
    location: "Remote",
    description:
      "Delivering flagship AI and enterprise products while mentoring engineers and leading technical architecture.",
    highlights: [
      "Deliver 3 flagship products in parallel: an AI-driven device intelligence platform (Udroid), an AI-assisted HR automation platform, and a complex microfrontend networking application (Extreme Networks)",
      "Design agentic AI features — LLM workflows, RAG pipelines, multi-tool agents (LangChain, MCP) — automating HR and network-ops processes that were previously manual",
      "Own full-stack delivery of Udroid: GenAI/FastAPI backend + React.js frontend on AWS, powering predictive analytics for connected devices",
      "Lead full-stack development (React, Next.js, TypeScript, Node.js, FastAPI), partnering with product and design to ship faster without sacrificing quality",
      "Architect scalable Single-SPA microfrontend solutions, improving modularity and enabling independent team deployability",
      "Mentor 2-4 engineers through code reviews and architecture decisions; maintain a weekly release cadence via GitHub Actions CI/CD",
    ],
  },
  {
    company: "LMKR",
    role: "Full Stack Developer",
    period: "Jan 2023 – Apr 2025",
    location: "On-Site",
    description:
      "Built enterprise and government-scale applications for major clients in oil & gas and public sectors.",
    highlights: [
      "Built enterprise/government-scale applications (Angular, ASP.NET Core, GraphQL, SQL) for 4 major clients including Halliburton, PMRSC, LDP, and WASA",
      "Built interactive, data-intensive analytics dashboards (Highcharts, ECharts) for global oil and gas operations",
      "Partnered directly with client stakeholders to translate requirements into secure, production-ready features within an Nx Monorepo architecture",
    ],
  },
  {
    company: "Saufik Inc.",
    role: "Frontend Developer",
    period: "Aug 2021 – Dec 2022",
    location: "Hybrid",
    description:
      "Built a real estate management platform with real-time updates and performant UI architecture.",
    highlights: [
      "Built a real estate management platform (Projul) with Angular, React, and ASP.NET Core, using SignalR for real-time listing updates",
      "Designed reusable UI components and IndexedDB caching, improving performance and long-term maintainability",
    ],
  },
  {
    company: "O2Geeks",
    role: "Backend Developer",
    period: "Oct 2020 – Aug 2021",
    location: "On-Site",
    description:
      "Shipped RESTful APIs and partnered on scalable architecture across multiple product launches.",
    highlights: [
      "Built RESTful APIs (Flask, Django, FastAPI) integrated with Angular frontends across 3 production launches (The 7Minute App, EdYou, Assets Real Estate)",
      "Partnered with senior engineers on scalable architecture and reusable components as a junior team member",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Udroid — AI Device Intelligence Platform",
    shortTitle: "Udroid",
    subtitle: "AI-driven device intelligence & predictive analytics",
    description:
      "AI-driven platform for device intelligence and predictive analytics, enabling proactive rather than reactive monitoring. Owned full-stack delivery — GenAI/FastAPI backend with React.js frontend on AWS.",
    tags: ["GenAI", "FastAPI", "React.js", "AWS", "RAG", "LLM"],
    link: "https://app.prod.udroid.ai",
    featured: true,
    category: "AI Platform",
  },
  {
    id: 2,
    title: "Extreme Networks — Enterprise Networking Platform",
    shortTitle: "Extreme Networks",
    subtitle: "Microfrontend networking application at enterprise scale",
    description:
      "Complex enterprise-scale networking application built with Single-SPA to enable independent development and deployment across multiple squads. Led full-stack architecture and cross-team integration.",
    tags: [
      "Single-SPA",
      "Microfrontends",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
    ],
    link: "#",
    featured: true,
    category: "Enterprise SaaS",
  },
  {
    id: 3,
    title: "Halliburton Analytics Platform",
    shortTitle: "Halliburton Analytics",
    subtitle: "Data-intensive dashboards for global oil & gas analytics",
    description:
      "Data-intensive dashboards for global oil and gas analytics, supporting faster decisions for globally distributed teams. Built with Angular, PrimeNG, Highcharts/ECharts within an Nx Monorepo.",
    tags: ["Angular", "PrimeNG", "Highcharts", "ECharts", "Nx Monorepo", "SQL"],
    link: "#",
    featured: true,
    category: "Enterprise Analytics",
  },
  {
    id: 4,
    title: "AI-Assisted HR Automation Platform",
    shortTitle: "HR Automation",
    subtitle: "Agentic AI transforming HR operations",
    description:
      "AI-assisted HR automation platform using LangChain and MCP-powered multi-tool agents to automate previously manual HR and network-ops processes end-to-end.",
    tags: ["LangChain", "MCP", "AI Agents", "RAG", "Next.js", "FastAPI"],
    link: "#",
    featured: false,
    category: "AI Platform",
  },
  {
    id: 5,
    title: "Projul — Real Estate Management",
    shortTitle: "Projul",
    subtitle: "Real-time property management with SignalR",
    description:
      "Real estate management platform using Angular, React, and ASP.NET Core. SignalR-powered real-time listing updates, reusable UI components, and IndexedDB caching for performance.",
    tags: ["Angular", "React", "ASP.NET Core", "SignalR", "IndexedDB"],
    link: "#",
    featured: false,
    category: "Real Estate SaaS",
  },
  {
    id: 6,
    title: "Government Public Sector Applications",
    shortTitle: "Public Sector Apps",
    subtitle: "Enterprise systems for PMRSC, LDP, and WASA",
    description:
      "Enterprise and government-scale applications for PMRSC, LDP, and WASA — built with Angular, ASP.NET Core, GraphQL, and SQL. Partnered directly with client stakeholders on secure, production-ready systems.",
    tags: ["Angular", "ASP.NET Core", "GraphQL", "SQL", "Government"],
    link: "#",
    featured: false,
    category: "Public Sector",
  },
];

export const education = {
  degree: "BS, Electrical & Computer Engineering",
  school: "Comsats University Islamabad",
  period: "2016 – 2020",
};

export const certifications = [
  {
    name: "ISO/IEC 27001 – Information Security Management",
    issuer: "ISO",
  },
  {
    name: "Google Project Management Professional Certificate",
    issuer: "Coursera · Google",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera · DeepLearning.AI",
  },
];

export const extras = [
  "Published technical articles on Medium covering software engineering and AI topics",
];
