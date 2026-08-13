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
    <section
      id="skills"
      className="relative overflow-hidden bg-bg-secondary/35 py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:56px_56px] opacity-35" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-bnb/[0.05] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-bnb/[0.05] blur-3xl" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">
            <Wrench className="h-3.5 w-3.5" />
            Technical Skills
          </span>
          <h2 className="section-title max-w-3xl text-balance">
            A toolkit honed across{" "}
            <span className="word-gold">enterprise</span> and{" "}
            <span className="word-gold">AI</span> systems
          </h2>
          <p className="section-lead">
            Six years of production experience across large frontend monorepos,
            API backends, and agentic AI platforms — with the scars and certifications to prove it.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="card card-hover card-hairline group relative flex flex-col p-6 sm:p-7 corner-deco"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bnb/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-bnb/18 blur-md opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                    <div className="icon-box icon-box-gold">
                      <Icon className="h-[22px] w-[22px]" strokeWidth={2} />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                      {cat.category}
                    </h3>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bnb/80">
                      {String(cat.items.length).padStart(2, "0")} technologies
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.items.map((s, j) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, borderColor: "rgba(240, 185, 11, 0.45)", color: "#F0B90B", backgroundColor: "rgba(240, 185, 11, 0.05)" }}
                      transition={{ duration: 0.3, delay: i * 0.06 + j * 0.02 }}
                      className="tag cursor-default"
                      title={s}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-border-subtle pt-5">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((n) => (
                      <div
                        key={n}
                        className="h-2 w-2 rounded-full"
                        style={{
                          background: n === 2 ? "#F0B90B" : n === 1 ? "#0ECB81" : "#F6465D",
                          boxShadow: "0 0 5px currentColor",
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-ink-muted">
                    battle-tested · production-ready
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Special: Currently exploring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: skills.length * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="card card-hover card-hairline relative flex flex-col overflow-hidden p-6 sm:p-7 sm:col-span-2 xl:col-span-1"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(240,185,11,0.18), rgba(240,185,11,0) 55%)",
              }}
            />
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <div className="icon-box border-bnb/30 bg-ink text-bnb">
                  <Sparkles className="h-[22px] w-[22px]" strokeWidth={2} />
                </div>
                <div className="absolute inset-0 rounded-xl animate-pulse-gold" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                  Currently exploring
                </h3>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bnb/80">
                  WIP · deep-dive mode
                </p>
              </div>
            </div>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {["Rust", "ZK Proofs", "Multi-Agent", "LlamaIndex", "CUDA / GPU", "Sui / Move"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded border border-bnb/30 bg-bnb/[0.10] px-2.5 py-1 font-mono text-[11px] font-semibold text-bnb"
                  >
                    <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-bnb animate-pulse" />
                    {t}
                  </span>
                )
              )}
            </div>
            <div className="relative mt-auto pt-5">
              <div className="flex items-center justify-between rounded-lg border border-bnb/20 bg-bnb/[0.06] px-3.5 py-3 card-hairline">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bnb/80">
                  weekly hours logged
                </span>
                <span className="font-display text-lg font-extrabold text-bnb">
                  10+ <span className="text-[12px] font-semibold text-ink-muted">hrs</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
