"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/**
 * HeroPhoto — displays the profile photo on the right side of the hero.
 * On hover: transitions from grayscale → full color with a subtle scale animation.
 * Place your photo at /public/profile.jpg (or .png, .webp).
 */
export function HeroPhoto() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      {/* Ambient glow behind photo */}
      <div
        className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/8 blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Photo container */}
      <div
        className="relative z-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Decorative ring */}
        <motion.div
          className="absolute -inset-3 rounded-2xl border border-cyan-500/20"
          animate={hovered ? { borderColor: "rgba(34,211,238,0.4)", scale: 1.02 } : { borderColor: "rgba(34,211,238,0.12)", scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Second decorative ring */}
        <motion.div
          className="absolute -inset-6 rounded-2xl border border-border"
          animate={hovered ? { opacity: 0.6, scale: 1.01 } : { opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Photo frame */}
        <motion.div
          className="relative h-[380px] w-[300px] overflow-hidden rounded-2xl"
          animate={hovered ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 z-10"
            animate={hovered ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ mixBlendMode: "saturation", background: "rgba(0,0,0,1)" }}
          />

          <Image
            src="/profile.jpg"
            alt="Arjun Shenoy R"
            fill
            className="object-cover object-top"
            priority
            sizes="300px"
          />

          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-background/40 to-transparent z-20 pointer-events-none" />
        </motion.div>

        {/* Name card at bottom */}
        <motion.div
          className="absolute -bottom-4 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card/90 px-4 py-2 backdrop-blur-sm shadow-sm"
          animate={hovered ? { y: -2, borderColor: "rgba(34,211,238,0.3)" } : { y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold text-foreground">Arjun Shenoy R</p>
          <p className="text-xs text-muted-foreground text-center">AI Engineer</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
