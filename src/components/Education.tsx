"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GraduationCap,
  Languages as LangIcon,
  PenLine,
  Shield,
} from "lucide-react";
import { certifications, education, extras, personalInfo } from "@/lib/data";

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:52px_52px] opacity-[0.22]" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-bnb/5 blur-3xl" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">
            <GraduationCap className="h-3.5 w-3.5" />
            Education & Certifications
          </span>
          <h2 className="section-title">
            Formal foundations +{" "}
            <span className="word-gold">continuous learning</span>
          </h2>
          <p className="section-lead">
            Engineering degree, security & management certs, deep learning
            specialization, and a habit of publishing on Medium.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Degree + extras */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="card card-hover relative overflow-hidden p-6 sm:p-8 lg:col-span-5 dot-corners gold-wrap"
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-bnb/10 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl animate-pulse-gold opacity-60" />
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-bnb/40 bg-bnb text-bg-secondary shadow-glow-gold sm:h-16 sm:w-16">
                    <BookOpen className="h-7 w-7" strokeWidth={2.2} />
                  </div>
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bnb/90">
                    degree
                  </div>
                  <h3 className="mt-1 font-display text-lg font-extrabold leading-tight tracking-tight text-ink sm:text-xl">
                    {education.degree}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-sm font-semibold text-bnb">
                      {education.school}
                    </span>
                    <span className="chip">{education.period}</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-7 border-t border-border-subtle pt-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                  <LangIcon className="h-3.5 w-3.5 text-bnb" />
                  Languages
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.languages.map((l) => (
                    <div
                      key={l.name}
                      className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-border bg-bg-tertiary/60 px-4 py-3 transition-all duration-200 hover:border-bnb/50"
                    >
                      <span className="font-semibold text-ink">{l.name}</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-bnb/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-bnb">
                        {l.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras */}
              {extras.length > 0 && (
                <div className="mt-6 rounded-xl border border-bnb/20 bg-bnb/[0.06] p-4.5">
                  {extras.map((e) => (
                    <div key={e} className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bnb/15 text-bnb">
                        <PenLine className="h-4 w-4" strokeWidth={2} />
                      </div>
                      <p className="text-[13.5px] leading-relaxed text-ink-secondary sm:text-sm">
                        {e}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="mb-4 flex items-center gap-3 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted">
              <Award className="h-3.5 w-3.5 text-bnb" />
              Certifications
              <span className="inline-block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="space-y-4">
              {certifications.map((c, i) => {
                const isSecurity = c.name.toLowerCase().includes("iso");
                const isProject = c.name.toLowerCase().includes("project management");
                const Icon = isSecurity ? Shield : isProject ? Award : Award;
                return (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="card card-hover group flex items-start gap-4 p-5 sm:p-6"
                  >
                    <div
                      className={
                        "relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-all duration-300 sm:h-14 sm:w-14 " +
                        (i === 0
                          ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 group-hover:border-emerald-400/60"
                          : i === 1
                          ? "border border-bnb/40 bg-bnb/10 text-bnb group-hover:shadow-glow-gold"
                          : "border border-sky-400/30 bg-sky-400/10 text-sky-300 group-hover:border-sky-400/60")
                      }
                    >
                      <Icon className="h-[22px] w-[22px] sm:h-6 sm:w-6" strokeWidth={2} />
                    </div>
                    <div className="flex min-w-0 flex-1 items-start justify-between gap-4 pt-0.5">
                      <div className="min-w-0">
                        <h4 className="font-display text-[15px] font-bold leading-snug tracking-tight text-ink sm:text-base">
                          {c.name}
                        </h4>
                        <p className="mt-1 text-sm text-ink-tertiary">
                          {c.issuer}
                        </p>
                      </div>
                      <div className="hidden shrink-0 items-center gap-2 rounded-full border border-border bg-bg-tertiary/60 px-3 py-1.5 sm:flex">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                          earned
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
