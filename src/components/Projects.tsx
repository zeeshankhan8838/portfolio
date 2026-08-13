"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  FolderKanban,
  Sparkles,
} from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-bg-secondary/40 py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:52px_52px] opacity-40" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-bnb/5 blur-[120px]" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="eyebrow">
              <FolderKanban className="h-3.5 w-3.5" />
              Key Projects
            </span>
            <h2 className="section-title">
              Selected work that shipped to{" "}
              <span className="word-gold">real users</span>
            </h2>
            <p className="section-lead">
              Highlights from AI platforms to enterprise dashboards — click a
              live link where available.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["all", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "relative inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200",
                  filter === c
                    ? "border-bnb bg-bnb text-bg-secondary shadow-glow-gold"
                    : "border-border bg-bg-secondary text-ink-tertiary hover:border-bnb/50 hover:text-bnb"
                )}
              >
                {c === "all" ? "All" : c}
              </button>
            ))}
          </div>
        </motion.div>

        {featured.length > 0 && (
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {featured.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group card card-hover relative flex flex-col overflow-hidden",
                  i === 0 && "lg:col-span-2"
                )}
              >
                {/* Top banner */}
                <div
                  className={cn(
                    "relative w-full overflow-hidden border-b border-border-subtle",
                    i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                  )}
                >
                  {/* Creative gradient banners */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        i === 0
                          ? `
                              radial-gradient(120% 100% at 0% 0%, #FCD535 0%, rgba(240,185,11,0.0) 60%),
                              radial-gradient(100% 120% at 100% 100%, #78350F 0%, rgba(120,53,15,0) 55%),
                              linear-gradient(135deg, #1C1917 0%, #292524 50%, #0C0A09 100%)
                            `
                          : i === 1
                          ? `
                              radial-gradient(100% 100% at 100% 0%, #F0B90B 0%, rgba(240,185,11,0) 55%),
                              radial-gradient(80% 80% at 0% 100%, #3B82F6 0%, rgba(59,130,246,0) 60%),
                              linear-gradient(135deg, #0B0E11 0%, #181A20 60%, #0B0E11 100%)
                            `
                          : `
                              radial-gradient(100% 100% at 50% 0%, rgba(240,185,11,0.6) 0%, rgba(240,185,11,0) 60%),
                              linear-gradient(135deg, #111827 0%, #1f2937 50%, #0b1220 100%)
                            `,
                    }}
                  />
                  <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:36px_36px] opacity-40 mix-blend-overlay" />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 35%)",
                    }}
                  />

                  {/* Corner decoration */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-bnb ring-1 ring-bnb/40 backdrop-blur-sm">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink ring-1 ring-white/10 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>

                  {/* Arrow top-right */}
                  <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-white/90 text-bg-secondary shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-bnb group-hover:shadow-glow-gold sm:h-12 sm:w-12">
                    <ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
                  </div>

                  {/* Bottom titles overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 sm:pb-7">
                    <div className="flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bnb/90">
                          case study 0{i + 1}
                        </div>
                        <h3 className="mt-1.5 font-display text-2xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-3xl">
                          {p.shortTitle}
                        </h3>
                        <p className="mt-1.5 text-sm text-white/80 sm:text-[15px]">
                          {p.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-sm leading-relaxed text-ink-tertiary sm:text-[15px]">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="mt-16">
            <h3 className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-ink-muted">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-transparent to-bnb" />
              More projects
              <span className="inline-block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <motion.a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group card card-hover relative flex flex-col overflow-hidden p-6"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-bnb/[0.08] blur-2xl transition-transform duration-500 group-hover:scale-150"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="relative grid h-11 w-11 place-items-center rounded-xl border border-bnb/30 bg-bnb/10 text-bnb transition-all duration-300 group-hover:bg-bnb group-hover:text-bg-secondary group-hover:shadow-glow-gold">
                      <FolderKanban className="h-[19px] w-[19px]" strokeWidth={2} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="chip text-[11px]">{p.category}</span>
                      <ExternalLink className="h-4 w-4 text-ink-muted transition-colors group-hover:text-bnb" />
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bnb/80">
                      project 0{i + 4}
                    </div>
                    <h4 className="mt-1.5 font-display text-lg font-bold tracking-tight text-ink">
                      {p.shortTitle}
                    </h4>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-tertiary">
                      {p.description}
                    </p>
                  </div>

                  <div className="relative mt-5 flex flex-wrap gap-1.5 border-t border-border-subtle pt-4">
                    {p.tags.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-bg-tertiary/60 px-2 py-0.5 font-mono text-[10.5px] text-ink-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
