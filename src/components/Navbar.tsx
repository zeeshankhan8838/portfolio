"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
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
      const y = window.scrollY + 140;
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
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border-subtle bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-bg/60 backdrop-blur-md"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink font-display text-sm font-bold text-white transition-transform group-hover:scale-[1.03]">
            ZK
          </span>
          <span className="hidden font-display text-[15px] font-semibold tracking-tight text-ink sm:block">
            Zeeshan Khan
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
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

        <div className="hidden lg:flex">
          <a
            href="mailto:zeeshankhan8838@gmail.com"
            className="btn-primary"
          >
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-secondary text-ink-secondary transition-colors hover:bg-bg-tertiary lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-border-subtle bg-bg-secondary lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.href);
                  }}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    active === l.href
                      ? "bg-bg-tertiary text-ink"
                      : "text-ink-secondary hover:bg-bg-tertiary hover:text-ink"
                  )}
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="mailto:zeeshankhan8838@gmail.com"
                className="btn-primary mt-3"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
