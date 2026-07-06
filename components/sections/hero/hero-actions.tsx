"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonBase = "inline-flex shrink-0 items-center justify-center rounded-lg text-sm font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function HeroActions() {
  return (
    <motion.div
      className="flex flex-wrap gap-4"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
    >
      <a
        href="#projects"
        className={cn(
          buttonBase,
          "gap-2 h-10 px-5 bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20"
        )}
      >
        View Projects
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonBase,
          "gap-2 h-10 px-5 border border-border hover:border-cyan-500/40 hover:text-cyan-400 bg-transparent"
        )}
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Resume
      </a>
    </motion.div>
  );
}