"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/constants/skills";
import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/types";
import { fadeUp } from "@/lib/animations";

const levelConfig: Record<SkillLevel, { label: string; color: string; bars: number }> = {
  beginner:     { label: "Beginner",     color: "bg-slate-400",   bars: 1 },
  intermediate: { label: "Intermediate", color: "bg-cyan-400",    bars: 2 },
  advanced:     { label: "Advanced",     color: "bg-blue-400",    bars: 3 },
  expert:       { label: "Expert",       color: "bg-violet-400",  bars: 4 },
};

function SkillBadge({ name, level }: { name: string; level: SkillLevel }) {
  const config = levelConfig[level];
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card/50 px-4 py-2.5 text-sm transition-all duration-200 hover:border-cyan-500/30 hover:bg-card">
      <span className="font-medium text-foreground">{name}</span>
      <div className="flex items-center gap-0.5" aria-label={`${config.label} proficiency`}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-3 rounded-full transition-colors",
              i < config.bars ? config.color : "bg-border"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Technical Skills
          </p>
          <h2
            id="skills-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Technologies &amp; Tools
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            A curated overview of the technologies I work with — from AI and
            machine learning to backend systems and developer tooling.
          </p>
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: groupIdx * 0.08 }}
              className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm"
            >
              <div className="mb-5">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {group.category}
                </h3>
                {group.description && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {group.description}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {Object.entries(levelConfig).map(([level, config]) => (
            <div key={level} className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-1.5 w-3 rounded-full",
                      i < config.bars ? config.color : "bg-border"
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{config.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
