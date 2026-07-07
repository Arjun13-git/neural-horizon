"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Cpu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeUp } from "@/lib/animations";

const facts = [
  {
    Icon: GraduationCap,
    label: "Education",
    value: "BE Computer Science & Engineering",
    sub: `${siteConfig.college} · VTU · CGPA ${siteConfig.cgpa}`,
  },
  {
    Icon: Cpu,
    label: "Specialization",
    value: "AI/ML Engineering",
    sub: "Machine Learning · Agentic AI · Backend Systems",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    sub: "Available for Remote & Relocation",
  },
];

const interests = [
  "Agentic AI & LLM Systems",
  "Machine Learning Engineering",
  "Backend Architecture",
  "Quantum ML",
  "Technical Research",
  "Open Source",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — Narrative */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                About Me
              </p>
              <h2
                id="about-heading"
                className="mt-3 font-heading text-3xl font-bold md:text-4xl"
              >
                Engineer by discipline.{" "}
                <span className="gradient-text">AI-first by conviction.</span>
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Computer Science Engineering student at Sahyadri College
                of Engineering &amp; Management, driven by a single conviction:{" "}
                <span className="font-medium text-foreground">
                  build complete systems, not just components.
                </span>
              </p>
              <p>
                From multi-agent AI architectures to full-stack disaster response
                platforms, every project I approach starts with understanding the
                problem, designing the architecture, breaking it into modules, and
                building incrementally. I believe the gap between an AI experiment
                and an AI product is pure engineering discipline.
              </p>
              <p>
                I&apos;m currently working as a Software Engineering Intern at{" "}
                <span className="font-medium text-foreground">Datavex AI Pvt Ltd</span>,
                building AI-powered products and enterprise software — turning academic
                theory into production-grade systems that solve real problems.
              </p>
            </div>

            {/* Interests */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                What I&apos;m Interested In
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-400"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Quick Facts */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            {facts.map(({ Icon, label, value, sub }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-cyan-500/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{value}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-sm font-medium text-emerald-400">Available for Placements</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Software Engineering Intern · Datavex AI Pvt Ltd
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
