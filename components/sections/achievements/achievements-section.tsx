"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Code2, Cpu } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const competitions = [
  {
    Icon: Cpu,
    category: "Internship",
    title: "Datavex AI Pvt Ltd — Software Engineering Intern",
    description:
      "Contributing to an AI-powered CAD platform (CAD Copilot) and an enterprise ERP system. Building full-stack features, integrating ML capabilities and REST APIs, and improving production reliability.",
    date: "Mar 2026 – Present",
    accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    Icon: Zap,
    category: "Hackathon",
    title: "AMD Slingshot 2026",
    description:
      "Built PromptGuard — an intelligent middleware platform protecting LLMs against prompt injection, jailbreak attempts, malicious prompts, and unsafe model interactions.",
    date: "March 2026",
    accent: "text-red-400 bg-red-500/10 border-red-500/20",
  },
  {
    Icon: Trophy,
    category: "Hackathon",
    title: "VexStorm '26",
    description:
      "Built Sentinel Agents — an autonomous AI-powered cybersecurity platform performing vulnerability assessment, intelligent scanning, threat analysis, and automated security reporting.",
    date: "February 2026",
    accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    Icon: Zap,
    category: "Hackathon",
    title: "Versathon 1.0",
    description:
      "24-hour online hackathon hosted by the Department of Training & Placement Cell, Sahyadri College. Built an offline-first AI-powered KYC Verification Platform enabling secure identity verification without continuous internet.",
    date: "February 2026",
    accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    Icon: Zap,
    category: "Hackathon",
    title: "Google DeepMind — Vibe Code with Gemini 3 Pro",
    description:
      "Built Project Aether — an AI-powered GEOINT platform leveraging computer vision, satellite imagery analysis, spectral analysis, object detection, and defense intelligence simulations.",
    date: "December 2025",
    accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    Icon: Code2,
    category: "Hackathon",
    title: "Smart India Hackathon 2025",
    description:
      "Built ScriptBridge Transliterator and RailNova — focusing on language accessibility, intelligent transportation workflows, and scalable full-stack engineering.",
    date: "November 2025",
    accent: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    Icon: Trophy,
    category: "Hackathon",
    title: "Google Gen AI Exchange Hackathon",
    description:
      "Participated in Gen AI Exchange hackathon. Developed Lexi-AI, an AI powered tool used for translating legal documents to common man's language.",
    date: "November 2025",
    accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    Icon: Trophy,
    category: "Hackathon",
    title: "Adobe India Hackathon",
    description:
      "Participated in Adobe India's engineering and AI problem-solving hackathon, working on creative technology and AI-driven challenges.",
    date: "July 2025",
    accent: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    Icon: Trophy,
    category: "Hackathon",
    title: "HackHazards 2025",
    description:
      "Built Safe Horizon — an AI-assisted disaster management platform providing real-time alerts, hazard visualization, emergency response assistance, and intelligent situational awareness.",
    date: "April 2025",
    accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },

];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-24 px-6"
      aria-labelledby="achievements-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Competitions & Experience
          </p>
          <h2
            id="achievements-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Competitions &amp; Experience
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Hackathons, internships, and milestones that mark the journey from
            student to engineer — each one a real system built under pressure.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {competitions.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${item.accent.includes("emerald") ? "border-emerald-500/20 hover:shadow-emerald-500/5" : "border-border hover:border-cyan-500/20 hover:shadow-cyan-500/5"}`}
            >
              {/* Icon */}
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${item.accent}`}>
                <item.Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              {/* Category */}
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {item.category}
              </p>

              {/* Title */}
              <h3 className="font-heading text-sm font-bold text-foreground leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {/* Date */}
              <p className="mt-4 text-xs font-medium text-muted-foreground/70">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
