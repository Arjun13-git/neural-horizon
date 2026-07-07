"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import type { Experience } from "@/types";
import { formatDateRange } from "@/utils/date";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

function InternshipCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 p-7 transition-all duration-300",
        "bg-card/40 backdrop-blur-sm",
        "hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5",
        "dark:bg-card/30 dark:hover:bg-card/50"
      )}
    >
      {/* Subtle gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(6,182,212,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Header */}
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        {/* Icon + Role + Company */}
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
            <Briefcase className="h-5 w-5 text-cyan-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground leading-tight">
              {experience.role}
            </h3>
            <p className="mt-0.5 font-semibold text-cyan-400">{experience.company}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
          {experience.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Ongoing
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
            Internship
          </span>
        </div>
      </div>

      {/* Meta row */}
      <div className="relative mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-cyan-400/60" aria-hidden="true" />
          {formatDateRange(experience.startDate, experience.endDate || undefined)}
          {experience.current ? " · Ongoing" : experience.duration ? ` · ${experience.duration}` : ""}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-cyan-400/60" aria-hidden="true" />
          {experience.location}
        </span>
      </div>

      {/* Description */}
      <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">
        {experience.description}
      </p>

      {/* Key Contributions */}
      {experience.highlights.length > 0 && (
        <div className="relative mt-6">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Key Contributions
          </h4>
          <ul className="space-y-2">
            {experience.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <ChevronRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/70"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {experience.tech.length > 0 && (
        <div className="relative mt-6 flex flex-wrap gap-1.5">
          {experience.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export function InternshipCards({ experiences }: { experiences: Experience[] }) {
  if (experiences.length === 0) {
    return (
      <p className="py-16 text-center text-muted-foreground">
        No internship experience found.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
      {experiences.map((exp, i) => (
        <InternshipCard key={exp.slug} experience={exp} index={i} />
      ))}
    </div>
  );
}
