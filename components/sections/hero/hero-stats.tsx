"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/constants/stats";

export function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
      {heroStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: "easeOut" }}
          className="group"
        >
          <div className="font-heading text-3xl font-bold text-foreground transition-colors group-hover:text-cyan-400">
            {stat.value}
          </div>
          <div className="mt-1 text-sm font-medium text-muted-foreground">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}