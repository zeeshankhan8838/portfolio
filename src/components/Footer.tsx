"use client";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";
import { personalInfo, skills } from "@/lib/data";

export function Footer() {
  const stack = skills.flatMap((s) => s.items).slice(0, 24);

  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-secondary/60">
      {/* Ambient gold */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-bnb/5 blur-3xl" />

      {/* Marquee ticker of tech stack */}
      <div className="ticker py-3.5">
        <div className="marquee-track gap-10 whitespace-nowrap text-[12px] font-semibold uppercase tracking-widest text-ink-muted">
          {[...stack, ...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>{s}</span>
              <span className="inline-block h-1 w-1 rounded-full bg-bnb/60" />
            </span>
          ))}
        </div>
      </div>

      <div className="container-page relative py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3"
            >
              <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-bnb text-bg-secondary shadow-glow-gold">
                <Zap className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-lg font-extrabold tracking-tight text-ink">
                  ZEESHAN<span className="text-bnb">.</span>KHAN
                </div>
                <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bnb">
                  <Sparkles className="mr-1 inline h-3 w-3" />
                  {personalInfo.title}
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-tertiary">
              {personalInfo.profile.slice(0, 200)}…
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {["Agentic AI", "RAG", "Next.js", "Angular", "FastAPI", "Single-SPA"].map(
                (t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                )
              )}
            </div>

            <div className="mt-7 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { Icon: Github, href: personalInfo.github, label: "GitHub" },
                { Icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
                { Icon: Phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}`, label: "Phone" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group relative grid h-11 w-11 place-items-center rounded-xl border border-border bg-bg-tertiary/60 text-ink-tertiary transition-all duration-300 hover:-translate-y-0.5 hover:border-bnb hover:text-bnb hover:shadow-glow-gold"
                  aria-label={label}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-bnb">
              // Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bnb" />
                <span className="text-ink-secondary">{personalInfo.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-bnb" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="break-all text-ink-secondary transition-colors hover:text-bnb"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-bnb" />
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="text-ink-secondary transition-colors hover:text-bnb"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-bnb" />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-secondary transition-colors hover:text-bnb"
                >
                  /in/zeeshan8838
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-bnb">
              // Sitemap
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="group flex items-center gap-2 text-ink-secondary transition-colors hover:text-bnb"
                >
                  <span className="font-mono text-[11px] text-bnb/50 group-hover:text-bnb">→</span>
                  {name}
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-bnb/20 bg-bnb/[0.07] p-5">
              <div className="flex items-center gap-2">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-success">
                  Available for work
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                Open to full-time roles, contracts, and AI consulting.
                <a
                  href="mailto:zeeshankhan8838@gmail.com"
                  className="ml-1 font-semibold text-bnb hover:underline"
                >
                  Let&apos;s talk →
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Zeeshan Khan. Crafted with{" "}
            <span className="text-bnb">♦</span> using Next.js · Tailwind · Framer Motion.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            built/by/zeeshan · v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
