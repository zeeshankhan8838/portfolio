"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Hexagon } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 750);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.85 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 group sm:bottom-8 sm:right-8"
          aria-label="Back to top"
        >
          <span className="absolute inset-0 animate-pulse-gold rounded-2xl" />
          <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-bnb/50 bg-bnb text-bg-secondary shadow-glow-gold transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-bnb-soft">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
            <Hexagon className="absolute h-7 w-7 opacity-10" />
            <ArrowUp className="relative h-5 w-5" strokeWidth={2.5} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
