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

  const categories = Array.from(
    new Set(projects.map((p) => p.category))
  );

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <FolderKanban className="h-3.5 w-3.5" />
              Key Projects
            </span>
            <h2 className="section-title">
              Selected work that shipped to <span className="text-accent">real users</span>
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
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all",
                  filter === c
                    ? "border-ink bg-ink text-white"
                    : "border-border bg-bg-secondary text-ink-tertiary hover:border-ink/20 hover:text-ink"
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "card card-hover group relative flex flex-col overflow-hidden",
                  i === 0 && "lg:col-span-2"
                )}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border-subtle bg-bg-tertiary sm:aspect-[16/8]">
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 35%, #60a5fa 100%)"
                          : i === 1
                          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #334155 100%)"
                          : "linear-gradient(135deg, #78350f 0%, #b45309 45%, #d97706 100%)",
                      opacity: 0.9,
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(600px circle at 20% 20%, rgba(255,255,255,0.15), transparent 50%)",
                    }}
                  />
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm ring-1 ring-white/20">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/95 backdrop-blur-sm ring-1 ring-white/15">
                      {p.category}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-[28px]">
                          {p.shortTitle}
                        </h3>
                        <p className="mt-1 text-sm text-white/80">
                          {p.subtitle}
                        </p>
                      </div>
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-ink shadow-card transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-card-hover sm:h-11 sm:w-11">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-sm leading-relaxed text-ink-tertiary sm:text-[15px]">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                    {p.tags.map((t) => (
                      <span key={t} className="tag-pill">
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
          <div className="mt-14">
            <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
              <span className="inline-block h-px w-6 bg-border-strong" />
              More projects
              <span className="inline-block h-px flex-1 bg-border" />
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <motion.a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="card card-hover group flex flex-col p-6 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-bg-tertiary text-ink-tertiary transition-colors group-hover:bg-accent-faint group-hover:text-accent">
                      <FolderKanban className="h-[18px] w-[18px]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="chip text-[11px]">{p.category}</span>
                      <ExternalLink className="h-4 w-4 text-ink-muted transition-colors group-hover:text-accent" />
                    </div>
                  </div>
                  <h4 className="mt-5 font-display text-base font-semibold text-ink">
                    {p.shortTitle}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-tertiary line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border-subtle pt-4">
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-bg-tertiary px-2 py-0.5 text-[11px] font-medium text-ink-secondary"
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
