"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.18 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-xl border border-border bg-bg-secondary text-ink shadow-card transition-all hover:border-border-strong hover:shadow-card-hover sm:bottom-8 sm:right-8"
          aria-label="Back to top"
        >
          <ArrowUp className="h-[18px] w-[18px]" strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
