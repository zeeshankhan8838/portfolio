"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
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
            <Briefcase className="h-3.5 w-3.5" />
            Experience
          </span>
          <h2 className="section-title">
            Four roles, <span className="text-accent">one trajectory</span> of shipping
          </h2>
          <p className="section-lead">
            From backend APIs to leading enterprise product teams — a linear
            climb built on shipping real software.
          </p>
        </motion.div>

        <ol className="relative mt-16 space-y-10 before:absolute before:left-4 before:top-1 before:h-[calc(100%-1rem)] before:w-px before:bg-border sm:before:left-5">
          {experience.map((exp, i) => (
            <motion.li
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-12 sm:pl-16"
            >
              <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border-4 border-bg bg-ink sm:h-10 sm:w-10">
                <Building2 className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
              </span>

              <div className="card card-hover p-6 sm:p-7">
                <div className="flex flex-col gap-2 border-b border-border-subtle pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
                      {exp.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-sm font-semibold text-accent">
                        {exp.company}
                      </span>
                      <span className="text-sm text-ink-muted flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="chip whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-tertiary sm:text-[15px]">
                  {exp.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink-secondary sm:text-[15px]"
                    >
                      <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" />
                      <span className="flex-1">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
