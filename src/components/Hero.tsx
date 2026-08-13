"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Copy,
  Github,
  Linkedin,
  Layers,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const go = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(personalInfo.email);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border-line pt-6 sm:pt-10"
    >
      {/* Background grid + radial gold */}
      <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:56px_56px] opacity-50" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[520px]">
        <div className="absolute left-1/2 top-[-130px] h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-bnb/[0.09] blur-[130px]" />
      </div>

      {/* Floating decorative blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="pointer-events-none absolute right-[8%] top-28 hidden h-64 w-64 animate-float-slow rounded-full bg-bnb/[0.08] blur-3xl sm:block"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="pointer-events-none absolute left-[6%] bottom-20 hidden h-56 w-56 animate-float-med rounded-full bg-bnb/[0.05] blur-3xl sm:block"
      />

      <div className="container-page relative pt-6 sm:pt-14 lg:pt-20">
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="eyebrow">
            <span className="relative mr-1">
              <span className="absolute inset-0 animate-ping rounded-full bg-bnb opacity-55" />
              <span className="relative inline-block" />
            </span>
            6+ Years · Available for hire
          </span>
          <span className="chip-gold">
            <Bot className="mr-1 h-3 w-3" />
            Agentic AI · LangChain · MCP
          </span>
          <span className="chip">
            <Layers className="mr-1 h-3 w-3 text-bnb" />
            Full Stack Engineer
          </span>
        </motion.div>

        {/* Name + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-4xl"
        >
          <h1 className="font-display text-[2.75rem] font-extrabold leading-[1.02] tracking-tightest text-ink sm:text-6xl lg:text-[4.5rem] text-balance">
            <span className="block">
              Hi, I&apos;m{" "}
              <span className="text-shimmer">{personalInfo.firstName}</span>
              <span className="text-bnb">.</span>
            </span>
            <span className="mt-2 block font-display text-[1.35rem] font-semibold leading-tight tracking-tight text-ink-secondary sm:text-3xl lg:text-[2rem]">
              I build enterprise-grade web systems &{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-bnb">AI agents</span>
                <span className="absolute inset-x-0 bottom-0 h-2 -skew-y-1 bg-bnb/[0.18]" />
              </span>{" "}
              for global teams.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-ink-tertiary sm:text-lg">
            {personalInfo.profile}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3.5"
        >
          <button onClick={() => go("#projects")} className="btn-primary">
            View my projects
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
          </button>
          <button onClick={() => go("#contact")} className="btn-secondary">
            <Mail className="h-4 w-4" />
            Let&apos;s talk
          </button>
          <button onClick={copyEmail} className="btn-ghost">
            <Copy className="h-4 w-4" />
            Copy email
          </button>

          <div className="ml-1 flex items-center gap-2 pl-3 sm:border-l sm:border-border-line sm:pl-4">
            <SocialLink Icon={Linkedin} href={personalInfo.linkedin} />
            <SocialLink Icon={Github} href={personalInfo.github} />
            <SocialLink Icon={Mail} href={`mailto:${personalInfo.email}`} />
          </div>
        </motion.div>

        {/* Main grid: Profile card + Terminal + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-7"
        >
          {/* Creative profile terminal card */}
          <div className="lg:col-span-5">
            <ProfileCard />
          </div>

          {/* Code snippet + contact lines */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <CodeSnippetCard />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {personalInfo.stats.map((s) => (
                <div key={s.label} className="metric gold-wrap card-hairline">
                  <div className="metric-value">{s.value}</div>
                  <div className="metric-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating tag marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-16 -mx-5 sm:-mx-6 lg:-mx-8"
        >
          <div className="ticker border-x-0 !border-t">
            <div className="marquee-track items-center gap-12 px-6 py-4 text-sm font-semibold text-ink-secondary">
              {[
                ...["Next.js", "React", "Angular", "TypeScript", "FastAPI", "LangChain", "RAG", "MCP", "Single-SPA", "Nx", "Node.js", "ASP.NET Core"],
                ...["Next.js", "React", "Angular", "TypeScript", "FastAPI", "LangChain", "RAG", "MCP", "Single-SPA", "Nx", "Node.js", "ASP.NET Core"],
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-12 whitespace-nowrap">
                  <span className="flex items-center gap-2.5">
                    <Sparkles className="h-3.5 w-3.5 text-bnb" />
                    {t}
                  </span>
                  <span className="text-bnb/55">◆</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ Icon, href }: { Icon: any; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="grid h-10 w-10 place-items-center rounded-md border border-border bg-bg-secondary text-ink-tertiary transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-bnb/50 hover:text-bnb hover:shadow-glow-gold"
      aria-label="social"
    >
      <Icon className="h-4.5 w-4.5" strokeWidth={2} />
    </a>
  );
}

function ProfileCard() {
  const lines = [
    { k: "Name", v: personalInfo.name, mono: false },
    { k: "Role", v: personalInfo.title, mono: false },
    { k: "Email", v: personalInfo.email, mono: true },
    { k: "Phone", v: personalInfo.phone, mono: true },
    { k: "Location", v: personalInfo.location, mono: false },
    { k: "LinkedIn", v: "/in/zeeshan8838", mono: true },
  ];

  return (
    <div className="card card-hover corner-deco gold-wrap card-hairline overflow-hidden">
      {/* header */}
      <div className="term-head">
        <span className="term-dot bg-danger" />
        <span className="term-dot bg-bnb" />
        <span className="term-dot bg-success" />
        <div className="ml-3 flex items-center gap-2">
          <TerminalSquare className="h-3.5 w-3.5 text-ink-muted" />
          <span className="font-mono text-[11px] text-ink-muted">
            ~/zeeshan/info.sh
          </span>
        </div>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-ink-muted">
          running
        </span>
      </div>

      <div className="p-6 sm:p-7">
        {/* Avatar row */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="absolute -inset-[1.5px] rounded-full bg-gradient-to-br from-bnb via-bnb-soft to-bnb opacity-65 blur-[1px]" />
            <div className="relative grid h-20 w-20 place-items-center rounded-full border border-bnb/35 bg-gradient-to-br from-bg-secondary via-bg-tertiary to-bg-secondary text-3xl font-extrabold text-bnb shadow-[0_0_0_1px_rgba(240,185,11,0.18),0_0_24px_-4px_rgba(240,185,11,0.45)] sm:h-24 sm:w-24">
              ZK
            </div>
          </div>
          <div>
            <div className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
              Zeeshan Khan
            </div>
            <div className="mt-0.5 flex items-center gap-1.5 text-sm text-ink-secondary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Online · Building AI agents
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["LLMs", "React", "Angular", "FastAPI"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* KV list */}
        <div className="mt-7 space-y-1 border-t border-border-subtle pt-5">
          {lines.map((l) => (
            <div
              key={l.k}
              className="group flex items-center justify-between gap-3 rounded-md px-2 py-1.5 transition-colors duration-150 ease-out hover:bg-bg-tertiary/60"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                {l.k}
              </span>
              <span
                className={
                  "truncate text-sm font-medium text-ink-secondary " +
                  (l.mono ? "font-mono text-[12.5px]" : "")
                }
              >
                {l.v}
              </span>
            </div>
          ))}
        </div>

        {/* Langs + status */}
        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border-subtle pt-5">
          {personalInfo.languages.map((l) => (
            <div
              key={l.name}
              className="flex items-center justify-between rounded-lg border border-border bg-bg-tertiary/50 px-3.5 py-3 transition-colors duration-150 ease-out hover:border-bnb/35"
            >
              <span className="text-sm font-semibold text-ink">{l.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-bnb">
                {l.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeSnippetCard() {
  return (
    <div className="card card-hover card-hairline overflow-hidden">
      <div className="term-head">
        <span className="term-dot bg-danger" />
        <span className="term-dot bg-bnb" />
        <span className="term-dot bg-success" />
        <div className="ml-3 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-bnb" />
          <span className="font-mono text-[11px] text-ink-muted">
            zeeshan/engineer.ts
          </span>
        </div>
      </div>

      <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed text-ink-secondary sm:px-6 sm:text-[13px]">
{`const zeeshan = {
  role: ${s("Senior Software Engineer")},
  stack: {
    frontend: ${a(["Angular", "React", "Next.js", "TypeScript"])},
    backend:  ${a(["Node.js", "FastAPI", "ASP.NET Core", "GraphQL"])},
    ai:       ${a(["LLMs", "RAG", "LangChain", "MCP", "AI Agents"])}
  },
  clients: ${a(["Halliburton", "Extreme Networks", "LMKR"])},
  focus: "Agentic workflows + enterprise delivery",
  shipping: async (spec) => {
    while (spec.deadline) {
      await build(spec);
      await review();
      spec.morale++
    }
    return ${s("production-ready ✨")};
  }
};

zeeshan.shipping(${s("your idea?")}).then(hireMe);`}
      </pre>

      {/* Mini contact strip */}
      <div className="grid grid-cols-2 gap-px border-t border-border bg-border-line sm:grid-cols-4">
        {[
          { Icon: MapPin, label: "Islamabad, PK", href: null },
          { Icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}`, mono: true },
          { Icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}`, mono: true },
          { Icon: Linkedin, label: "/in/zeeshan8838", href: personalInfo.linkedin, mono: true },
        ].map(({ Icon, label, href, mono }) => {
          const Inner = (
            <div className="flex items-center gap-3 bg-bg-secondary px-4 py-3.5 transition-colors duration-150 ease-out hover:bg-bg-tertiary/70">
              <Icon className="h-4 w-4 shrink-0 text-bnb" strokeWidth={2} />
              <span className={
                "truncate text-xs font-medium text-ink-secondary sm:text-[13px] " +
                (mono ? "font-mono" : "")
              }>
                {label}
              </span>
            </div>
          );
          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block"
            >
              {Inner}
            </a>
          ) : (
            <div key={label}>{Inner}</div>
          );
        })}
      </div>
    </div>
  );
}

function s(v: string) {
  return (
    <span className="text-success">
      &quot;<span className="underline decoration-success/35 decoration-[1.5px] underline-offset-2">{v}</span>&quot;
    </span>
  ) as unknown as string;
}
function a(arr: string[]) {
  return (
    <>
      <span className="text-ink-muted">[</span>
      {arr.map((v, i) => (
        <span key={v + i}>
          <span className="text-success">&quot;{v}&quot;</span>
          {i < arr.length - 1 && <span className="text-ink-muted">, </span>}
        </span>
      ))}
      <span className="text-ink-muted">]</span>
    </>
  ) as unknown as string;
}
