"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Compass,
  GitBranch,
  Layers,
  Shield,
  Sparkles,
  Users2,
} from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "Agentic AI Focus",
    body: "Currently designing LLM workflows, RAG pipelines, and multi-tool agents (LangChain + MCP) to automate complex ops end-to-end.",
    num: "01",
  },
  {
    icon: Layers,
    title: "Large-Scale Frontend",
    body: "Architected Single-SPA microfrontends and Nx monorepos at enterprise scale — balancing velocity, type-safety, and deploy independence.",
    num: "02",
  },
  {
    icon: Compass,
    title: "Full Stack Delivery",
    body: "Owned full product lifecycles across Angular, React, Next.js, Node.js, FastAPI, and ASP.NET Core — concept → CI/CD → production.",
    num: "03",
  },
  {
    icon: Users2,
    title: "Mentorship & Leadership",
    body: "Mentor 2-4 engineers, run architecture reviews, and lead weekly release cadences with an emphasis on clear code and even clearer communication.",
    num: "04",
  },
  {
    icon: Shield,
    title: "Enterprise & Security",
    body: "ISO/IEC 27001 certified — shipped secure, auditable systems for Halliburton and government clients handling sensitive data.",
    num: "05",
  },
  {
    icon: GitBranch,
    title: "Agile Cross-Team",
    body: "Worked daily across distributed Agile/Scrum teams with product, design, QA, and DevOps — I write tickets, tests, and docs as happily as code.",
    num: "06",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:52px_52px] opacity-[0.25]"
      />
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              About
            </span>
            <h2 className="section-title">
              Senior engineer building the{" "}
              <span className="word-gold">AI + web</span> stack
            </h2>
            <p className="section-lead max-w-xl">
              Six years of shipping production software for Halliburton, Extreme Networks, and startups. I work best where ambitious UI meets messy real-world data.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Years of impact", value: "6+" },
                { label: "Products led end-to-end", value: "3+" },
                { label: "Global clients served", value: "10+" },
                { label: "Engineers mentored", value: "2-4" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="metric gold-wrap"
                >
                  <div className="metric-value">{s.value}</div>
                  <div className="metric-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-bnb/20 bg-bnb/[0.06] p-5">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-bnb" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-bnb">
                  Signature projects
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
                {[
                  "Udroid · AI Device Intelligence Platform",
                  "Extreme Networks · Microfrontend Networking Suite",
                  "Halliburton · Oil & Gas Analytics",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bnb shadow-[0_0_6px_rgba(240,185,11,0.8)]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group card card-hover relative overflow-hidden p-6"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 font-display text-[5.5rem] font-extrabold leading-none text-bnb/[0.07] transition-transform duration-500 group-hover:scale-110 group-hover:text-bnb/[0.12]">
                    {p.num}
                  </div>
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-bnb/30 bg-bnb/10 text-bnb transition-all duration-300 group-hover:bg-bnb group-hover:text-bg-secondary group-hover:shadow-glow-gold">
                      <p.icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h3 className="mt-5 font-display text-[15px] font-bold leading-snug text-ink sm:text-base">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-tertiary">
                      {p.body}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
