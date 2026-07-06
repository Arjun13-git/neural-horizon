"use client";

import { motion } from "framer-motion";
import { Trophy, Zap } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const achievements = [
  {
    Icon: Zap,
    category: "Hackathon",
    title: "Vexstorm '26",
    description:
      "Built Sentinel Agents — an autonomous multi-agent vulnerability scanning system — within the hackathon timeframe. Full working prototype delivered.",
    date: "Feb 2026",
    accent: "text-cyan-400 bg-cyan-500/10",
  },
  {
    Icon: Trophy,
    category: "Hackathon",
    title: "Deloitte Hacksplosion",
    description:
      "Participated in Deloitte India's flagship hackathon. Completed assessments and training sessions focused on data analytics and professional engineering.",
    date: "Mar 2026",
    accent: "text-blue-400 bg-blue-500/10",
  },
  {
    Icon: Trophy,
    category: "Hackathon",
    title: "Adobe India Hackathon",
    description:
      "Participated in Adobe India's engineering and AI problem-solving hackathon. Worked on creative technology challenges.",
    date: "Mar 2026",
    accent: "text-violet-400 bg-violet-500/10",
  },
  {
    Icon: Zap,
    category: "Milestone",
    title: "Startup Internship — Ongoing",
    description:
      "Currently interning at a startup, building production-level AI automation and backend systems. Hands-on experience with real-world engineering workflows.",
    date: "Mar 2026 – Present",
    accent: "text-cyan-400 bg-cyan-500/10",
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
            Achievements
          </p>
          <h2
            id="achievements-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Milestones &amp; Recognition
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Hackathons, certifications, and milestones that mark the journey
            from student to engineer.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-cyan-500/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl ${item.accent}`}>
                <item.Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              {/* Category */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {item.category}
              </p>

              {/* Title */}
              <h3 className="font-heading text-base font-bold text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {/* Date */}
              <p className="mt-4 text-xs text-muted-foreground">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
