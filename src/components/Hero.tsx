"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const go = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border-subtle pb-6 sm:pb-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.08), transparent)",
        }}
      />

      <div className="container-page relative pt-14 sm:pt-20 lg:pt-24">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <span className="chip-accent">
              <span className="relative mr-1.5 inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for new opportunities
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tightest text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              {personalInfo.name}
              <span className="block text-ink-tertiary font-semibold text-2xl sm:text-3xl lg:text-[1.75rem] mt-2 tracking-tight">
                {personalInfo.title}
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-[15px] leading-relaxed text-ink-tertiary sm:text-lg sm:leading-relaxed">
              {personalInfo.profile}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => go("#contact")} className="btn-primary">
                Contact me
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </button>
              <button onClick={() => go("#projects")} className="btn-secondary">
                View projects
              </button>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <dl className="mt-11 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
              {personalInfo.stats.map((s) => (
                <div key={s.label} className="metric">
                  <dt className="metric-value">{s.value}</dt>
                  <dd className="metric-label">{s.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="card card-hover overflow-hidden">
              <div className="flex items-center justify-between border-b border-border-subtle bg-bg-tertiary/60 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[11px] text-ink-muted">
                  ~/contact.sh
                </span>
              </div>

              <div className="space-y-4 px-5 py-5">
                <ContactLine
                  icon={<MapPin className="h-[17px] w-[17px]" />}
                  label="Location"
                  value={personalInfo.location}
                />
                <ContactLine
                  icon={<Phone className="h-[17px] w-[17px]" />}
                  label="Phone"
                  value={personalInfo.phone}
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                />
                <ContactLine
                  icon={<Mail className="h-[17px] w-[17px]" />}
                  label="Email"
                  value={personalInfo.email}
                  href={`mailto:${personalInfo.email}`}
                  mono
                />
                <ContactLine
                  icon={<Linkedin className="h-[17px] w-[17px]" />}
                  label="LinkedIn"
                  value="/in/zeeshan8838"
                  href={personalInfo.linkedin}
                />
                <ContactLine
                  icon={<Github className="h-[17px] w-[17px]" />}
                  label="GitHub"
                  value="@zeeshankhan"
                  href={personalInfo.github}
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {personalInfo.languages.map((l) => (
                <div
                  key={l.name}
                  className="rounded-xl border border-border bg-bg-secondary px-4 py-3"
                >
                  <div className="text-sm font-semibold text-ink">
                    {l.name}
                  </div>
                  <div className="text-xs text-ink-muted">{l.level}</div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function ContactLine(props: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  mono?: boolean;
}) {
  const Inner = (
    <div className="flex items-start gap-3">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg-tertiary text-ink-tertiary">
        {props.icon}
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="text-[11px] font-medium uppercase tracking-wider text-ink-muted">
          {props.label}
        </div>
        <div
          className={
            "mt-0.5 truncate text-sm font-medium text-ink " +
            (props.mono ? "font-mono text-[13px]" : "")
          }
        >
          {props.value}
        </div>
      </div>
    </div>
  );
  return props.href ? (
    <a
      href={props.href}
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block transition-opacity hover:opacity-80"
    >
      {Inner}
    </a>
  ) : (
    Inner
  );
}
