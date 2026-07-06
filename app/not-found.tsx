import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

const btnBase =
  "inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg text-sm font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-8">
        {/* 404 number */}
        <div className="select-none">
          <span className="font-heading text-[8rem] font-black leading-none text-border md:text-[12rem]">
            404
          </span>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="font-heading text-2xl font-bold md:text-3xl">
            Page Not Found
          </h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className={`${btnBase} bg-primary text-primary-foreground hover:bg-primary/80`}
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Go Home
          </Link>
          <Link
            href="/#contact"
            className={`${btnBase} border border-border bg-transparent hover:bg-secondary`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Contact Me
          </Link>
        </div>

        {/* Tagline */}
        <p className="text-xs text-muted-foreground/50">
          Arjun Shenoy R — Building Intelligent Systems
        </p>
      </div>
    </div>
  );
}
