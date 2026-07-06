"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/types";
import { fadeUp } from "@/lib/animations";
import { formatDate } from "@/utils/date";

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-emerald-500/30 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
          <Award className="h-5 w-5 text-emerald-400" aria-hidden="true" />
        </div>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${cert.title} credential`}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {cert.issuer}
        </p>
        <h3 className="mt-1 font-heading text-base font-bold text-foreground group-hover:text-emerald-400 transition-colors">
          {cert.title}
        </h3>
      </div>

      {cert.description && (
        <p className="text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
      )}

      {cert.skills && cert.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <time className="text-xs text-muted-foreground" dateTime={cert.date}>
        Issued {formatDate(cert.date, "short")}
      </time>
    </motion.article>
  );
}

export function CertificationsGrid({ certifications }: { certifications: Certification[] }) {
  if (certifications.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-12">
        No certifications to display yet.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, i) => (
        <CertificationCard key={cert.slug} cert={cert} index={i} />
      ))}
    </div>
  );
}
