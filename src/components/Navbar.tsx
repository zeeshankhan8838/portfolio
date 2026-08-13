"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Profile", href: "#profile" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = navLinks.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top + window.scrollY <= y) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-out",
        scrolled
          ? "border-b border-border-line bg-bg/70 backdrop-blur-xl [backdrop-filter:saturate(180%)_blur(18px)]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-[72px]">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2.5"
        >
          <div className="relative">
            <div className="absolute inset-0 animate-pulse-gold rounded-md" />
            <div className="relative grid h-9 w-9 place-items-center rounded-md bg-bnb text-bg-secondary transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-[1.04] shadow-card">
              <Hexagon className="h-5 w-5" strokeWidth={2.5} />
            </div>
          </div>
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[15px] font-extrabold tracking-tight text-ink">
              ZEESHAN<span className="text-bnb">.</span>KHAN
            </span>
            <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bnb/80">
              <Sparkles className="mr-1 inline h-2.5 w-2.5" />
              Full Stack · AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 xl:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-active={active === l.href}
              onClick={(e) => {
                e.preventDefault();
                go(l.href);
              }}
              className="nav-link"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 xl:flex">
          <a
            href="https://linkedin.com/in/zeeshan8838"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            /in/zeeshan8838
          </a>
          <a
            href="mailto:zeeshankhan8838@gmail.com"
            className="btn-primary"
          >
            Hire me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-bg-secondary text-bnb transition-all duration-150 ease-out hover:border-bnb/50 hover:shadow-glow-gold xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-border-line bg-bg-secondary/95 backdrop-blur-xl xl:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.href);
                  }}
                  className={cn(
                    "flex items-center justify-between rounded-lg border border-transparent px-4 py-3 text-sm font-semibold transition-colors duration-150 ease-out",
                    active === l.href
                      ? "border-bnb/30 bg-bnb/[0.08] text-bnb"
                      : "text-ink-secondary hover:border-border hover:bg-bg-tertiary hover:text-ink"
                  )}
                >
                  <span>
                    <span className="mr-2 font-mono text-[11px] text-bnb/60">
                      0{i + 1}.
                    </span>
                    {l.label}
                  </span>
                  <span className="text-bnb/70">→</span>
                </motion.a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="https://linkedin.com/in/zeeshan8838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:zeeshankhan8838@gmail.com"
                  className="btn-primary"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
