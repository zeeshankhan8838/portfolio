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
  },
  {
    icon: Layers,
    title: "Large-Scale Frontend",
    body: "Architected Single-SPA microfrontends and Nx monorepos at enterprise scale — balancing velocity, type-safety, and deploy independence.",
  },
  {
    icon: Compass,
    title: "Full Stack Delivery",
    body: "Owned full product lifecycles across Angular, React, Next.js, Node.js, FastAPI, and ASP.NET Core — concept → CI/CD → production.",
  },
  {
    icon: Users2,
    title: "Mentorship & Leadership",
    body: "Mentor 2-4 engineers, run architecture reviews, and lead weekly release cadences with an emphasis on clear code and even clearer communication.",
  },
  {
    icon: Shield,
    title: "Enterprise & Security",
    body: "ISO/IEC 27001 certified — shipped secure, auditable systems for Halliburton and government clients handling sensitive data.",
  },
  {
    icon: GitBranch,
    title: "Agile Cross-Team",
    body: "Worked daily across distributed Agile/Scrum teams with product, design, QA, and DevOps — I write tickets, tests, and docs as happily as code.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <span className="section-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              About
            </span>
            <h2 className="section-title">
              Senior engineer building the <span className="text-accent">AI + web</span> stack
            </h2>
            <p className="section-lead max-w-xl">
              Six years of shipping production software for Halliburton,
              Extreme Networks, and startups. I work best where ambitious UI
              meets messy real-world data.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <StatCard label="Years of impact" value="6+" />
              <StatCard label="Products led end-to-end" value="3+" />
              <StatCard label="Global clients served" value="10+" />
              <StatCard label="Engineers mentored" value="2-4" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="card card-hover p-6"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-faint text-accent">
                    <p.icon className="h-[20px] w-[20px]" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-[15px] font-semibold text-ink sm:text-base">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-tertiary">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard(props: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-bg-secondary p-4 sm:p-5 shadow-card">
      <div className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {props.value}
      </div>
      <div className="mt-1 text-xs font-medium text-ink-muted sm:text-[13px]">
        {props.label}
      </div>
    </div>
  );
}
