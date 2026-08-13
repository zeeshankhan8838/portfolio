"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GraduationCap,
  Languages as LangIcon,
  PenLine,
  ShieldCheck,
} from "lucide-react";
import { certifications, education, extras, personalInfo } from "@/lib/data";

export function Education() {
  return (
    <section
      id="education"
      className="relative bg-bg-tertiary/40 py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-eyebrow">
            <GraduationCap className="h-3.5 w-3.5" />
            Education & Certifications
          </span>
          <h2 className="section-title">
            Formal foundations + <span className="text-accent">continuous learning</span>
          </h2>
          <p className="section-lead">
            Engineering degree, security & management certs, deep learning
            specialization, and a habit of publishing on Medium.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
            className="card card-hover p-7 lg:col-span-5"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-faint text-accent">
                <BookOpen className="h-6 w-6" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold leading-tight text-ink">
                  {education.degree}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-sm font-semibold text-accent">
                    {education.school}
                  </span>
                  <span className="chip text-[11px]">{education.period}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3 pt-6 border-t border-border-subtle">
              <div className="flex-1 rounded-xl border border-border-subtle bg-bg-tertiary/50 px-4 py-3.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  Languages
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {personalInfo.languages.map((l) => (
                    <span
                      key={l.name}
                      className="inline-flex items-center gap-1.5 rounded-md bg-bg px-2 py-0.5 text-[12px] font-medium text-ink-secondary"
                    >
                      <LangIcon className="h-3 w-3 text-accent" />
                      {l.name}
                      <span className="text-[10px] text-ink-muted">
                        ({l.level})
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {extras.length > 0 && (
              <div className="mt-4 rounded-xl border border-border-subtle bg-bg-tertiary/50 px-4 py-3.5">
                <div className="flex items-start gap-2.5">
                  <PenLine className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {extras[0]}
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
              <Award className="h-4 w-4" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((c, i) => {
                const isSecurity = c.name.toLowerCase().includes("iso");
                const isProject = c.name.toLowerCase().includes("project");
                const Icon = isSecurity
                  ? ShieldCheck
                  : isProject
                  ? Award
                  : Award;
                return (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="card card-hover flex items-start gap-4 p-5 sm:p-6"
                  >
                    <div
                      className={
                        "grid h-11 w-11 shrink-0 place-items-center rounded-xl " +
                        (i === 0
                          ? "bg-success/10 text-success"
                          : i === 1
                          ? "bg-gold/10 text-gold"
                          : "bg-accent-faint text-accent")
                      }
                    >
                      <Icon className="h-[20px] w-[20px]" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-[15px] font-semibold leading-snug text-ink">
                        {c.name}
                      </h4>
                      <p className="mt-0.5 text-xs font-medium text-ink-muted sm:text-sm">
                        {c.issuer}
                      </p>
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
