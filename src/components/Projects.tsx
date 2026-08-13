"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, FolderKanban, Sparkles, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-bg-secondary/35 py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:56px_56px] opacity-35" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-bnb/[0.05] blur-[120px]" />
      
      {/* Animated corner accents */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-32 w-32 opacity-30">
        <div className="absolute left-8 top-8 h-16 w-16 border-l-2 border-t-2 border-bnb/40" />
        <div className="absolute left-12 top-12 h-8 w-8 border-l border-t border-bnb/20" />
      </div>
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 opacity-30">
        <div className="absolute bottom-8 right-8 h-16 w-16 border-b-2 border-r-2 border-bnb/40" />
        <div className="absolute bottom-12 right-12 h-8 w-8 border-b border-r border-bnb/20" />
      </div>

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="eyebrow">
              <FolderKanban className="h-3.5 w-3.5" />
              Key Projects
            </span>
            <h2 className="section-title text-balance">
              Selected work that shipped to{" "}
              <span className="word-gold">real users</span>
            </h2>
            <p className="section-lead">
              Highlights from AI platforms to enterprise dashboards — click a
              live link where available.
            </p>
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
                onHoverStart={() => setHoveredProject(p.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={cn(
                  "group card card-hover card-hairline relative flex flex-col overflow-hidden",
                  i === 0 && "lg:col-span-2"
                )}
              >
                {/* Glow effect on hover */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br from-bnb/5 to-transparent opacity-0 transition-opacity duration-500",
                    hoveredProject === p.id && "opacity-100"
                  )}
                />
                <div
                  className={cn(
                    "relative w-full overflow-hidden border-b border-border-subtle bg-bg-tertiary",
                    i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                  )}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    unoptimized
                    className="object-contain bg-bg-tertiary transition-all duration-700 ease-out group-hover:scale-[1.04]"
                    sizes={
                      i === 0
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 1024px) 100vw, 33vw"
                    }
                    priority={i < 2}
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg to-bg-secondary/80 via-bg-secondary/60" />
                  <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:36px_36px] opacity-15 mix-blend-overlay" />

                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-bnb ring-1 ring-bnb/35 backdrop-blur-sm">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink ring-1 ring-white/10 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>

                  {/* Hover reveal arrow */}
                  <motion.div 
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-bnb text-bg-secondary opacity-0 transition-opacity duration-300"
                    animate={{ opacity: hoveredProject === p.id ? 1 : 0, scale: hoveredProject === p.id ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bnb/90">
                      case study 0{i + 1}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                      {p.shortTitle}
                    </h3>
                    <p className="mt-2 text-sm text-ink-tertiary sm:text-[15px]">
                      {p.subtitle}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-tertiary sm:text-[15px]">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                    {p.tags.map((t, j) => (
                      <motion.span 
                        key={t} 
                        className="tag"
                        whileHover={{ scale: 1.05 }}
                      >
                        {t}
                      </motion.span>
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
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group card card-hover card-hairline relative flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border-subtle bg-bg-tertiary">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      unoptimized
                      className="object-contain bg-bg-tertiary transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg via-bg-secondary/70 to-bg-secondary/40" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-bnb/[0.07] blur-2xl transition-transform duration-500 ease-out group-hover:scale-150"
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-md icon-box-gold icon-box-gold-hover group-hover:shadow-glow-gold">
                        <FolderKanban className="h-[19px] w-[19px]" strokeWidth={2} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="chip text-[11px]">{p.category}</span>
                        <ExternalLink className="h-4 w-4 text-ink-muted transition-colors duration-150 ease-out group-hover:text-bnb" />
                      </div>
                    </div>

                    <div className="relative mt-5">
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
                          className="rounded border border-border bg-bg-tertiary/60 px-2 py-0.5 font-mono text-[10.5px] text-ink-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
