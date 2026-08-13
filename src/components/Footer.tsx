"use client";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-secondary">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink font-display text-sm font-bold text-white">
                ZK
              </span>
              <div>
                <div className="font-display text-[15px] font-semibold tracking-tight text-ink">
                  Zeeshan Khan
                </div>
                <div className="text-xs text-ink-muted">
                  {personalInfo.title}
                </div>
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-tertiary">
              {personalInfo.profile.slice(0, 180)}…
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-bg text-ink-tertiary transition-all hover:border-ink/20 hover:text-ink"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-bg text-ink-tertiary transition-all hover:border-ink/20 hover:text-ink"
                aria-label="GitHub"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-bg text-ink-tertiary transition-all hover:border-ink/20 hover:text-ink"
                aria-label="Email"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-bg text-ink-tertiary transition-all hover:border-ink/20 hover:text-ink"
                aria-label="Phone"
              >
                <Phone className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
                <span className="text-ink-secondary">{personalInfo.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="break-all text-ink-secondary transition-colors hover:text-accent"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="text-ink-secondary transition-colors hover:text-accent"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-secondary transition-colors hover:text-accent"
                >
                  linkedin.com/in/zeeshan8838
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Navigate
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map(
                (x) => (
                  <li key={x}>
                    <a
                      href={`#${x.toLowerCase()}`}
                      className="text-ink-secondary transition-colors hover:text-ink"
                    >
                      {x}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border-subtle pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Zeeshan Khan. Crafted with care.
          </p>
          <p className="text-xs text-ink-muted">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
