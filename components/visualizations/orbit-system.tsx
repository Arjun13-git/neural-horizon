"use client";

import { motion } from "framer-motion";

export function OrbitSystem() {
  return (
    <>
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full border border-cyan-500/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute h-[300px] w-[300px] rounded-full border border-cyan-400/20"
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="
        absolute
        top-0
        left-1/2
        h-3
        w-3
        -translate-x-1/2
        rounded-full
        bg-cyan-300
        shadow-[0_0_18px_rgba(34,211,238,.8)]
      "
      />

      <motion.div
        className="
        absolute
        bottom-0
        left-1/2
        h-3
        w-3
        -translate-x-1/2
        rounded-full
        bg-cyan-300
      "
      />

      <motion.div
        className="
        absolute
        left-0
        top-1/2
        h-3
        w-3
        -translate-y-1/2
        rounded-full
        bg-cyan-300
      "
      />

      <motion.div
        className="
        absolute
        right-0
        top-1/2
        h-3
        w-3
        -translate-y-1/2
        rounded-full
        bg-cyan-300
      "
      />
    </>
  );
}