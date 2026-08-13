"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Cloud,
  Layout,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { skills } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Layout,
  Server,
  Cloud,
  BarChart3,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">
            <Wrench className="h-3.5 w-3.5" />
            Technical Skills
          </span>
          <h2 className="section-title">
            A toolkit honed across <span className="text-accent">enterprise</span> & AI systems
          </h2>
          <p className="section-lead">
            Six years of production experience across large frontend monorepos,
            API backends, and agentic AI platforms — with the scars and
            certifications to prove it.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card card-hover flex flex-col p-6 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-faint text-accent">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-ink-muted">
                      {cat.items.length} technologies
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className="tag-pill"
                      title={s}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: skills.length * 0.06 }}
            className="card card-hover flex flex-col p-6 sm:p-7 sm:col-span-2 xl:col-span-1"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
                <Sparkles className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  Currently exploring
                </h3>
                <p className="text-xs text-ink-muted">
                  Ongoing focus areas
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Rust",
                "ZK Proofs",
                "Multi-Agent Orchestration",
                "LlamaIndex",
                "CUDA / GPU",
              ].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-md border border-ink/10 bg-ink text-xs font-medium text-white"
                  style={{ padding: "4px 10px" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
