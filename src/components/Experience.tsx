"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:52px_52px] opacity-[0.22]" />
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">
            <Briefcase className="h-3.5 w-3.5" />
            Experience
          </span>
          <h2 className="section-title">
            Four roles,{" "}
            <span className="word-gold">one trajectory</span> of shipping
          </h2>
          <p className="section-lead">
            From backend APIs to leading enterprise product teams — a linear
            climb built on shipping real software.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-[17px] top-2 h-[calc(100%-1.75rem)] w-px sm:left-[21px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(240,185,11,0.7), rgba(240,185,11,0.2) 60%, rgba(240,185,11,0.05))",
            }}
          />

          <ol className="space-y-10">
            {experience.map((exp, i) => (
              <motion.li
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 sm:pl-[68px]"
              >
                <span className="absolute left-0 top-2">
                  <span className="relative flex h-9 w-9 items-center justify-center sm:h-[52px] sm:w-[52px]">
                    <span className="absolute inset-0 rounded-2xl bg-bnb/15 animate-pulse-slow" />
                    <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-bnb/50 bg-bg-secondary sm:h-[52px] sm:w-[52px] sm:rounded-2xl">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 36px, 52px"
                      />
                    </span>
                  </span>
                </span>

                <div className="card card-hover gold-wrap overflow-hidden p-6 sm:p-7">
                  <div className="flex flex-col gap-3 border-b border-border-subtle pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                          {exp.role}
                        </h3>
                        <span className="chip-gold">{exp.company}</span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-tertiary sm:text-[13px]">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-bnb" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="relative inline-flex items-center gap-2 rounded-full border border-border bg-bg-tertiary/60 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink-secondary">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-bnb shadow-[0_0_6px_rgba(240,185,11,0.9)]" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-tertiary sm:text-[15px]">
                    {exp.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3.5"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-bnb/10 text-bnb">
                          <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </span>
                        <span className="text-sm leading-relaxed text-ink-secondary sm:text-[15px]">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-bnb/25 bg-bnb/[0.06] px-5 py-2.5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bnb/90">
                present day
              </span>
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="text-sm font-semibold text-ink-secondary">
                still shipping 🚀
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
