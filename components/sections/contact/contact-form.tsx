"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

// ─── Formspree endpoint ────────────────────────────────────────────────────────
// Replace with your own Formspree form ID from https://formspree.io
// Create a free account → New Form → copy the form ID (e.g. "xpwzqjkb")
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzqjkb";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        const json = await response.json();
        console.error("Formspree error:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: 0.15 }}
    >
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center">
          <CheckCircle className="h-12 w-12 text-emerald-400" aria-hidden="true" />
          <h3 className="font-heading text-xl font-bold text-foreground">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus("idle")}
            className="mt-2"
          >
            Send Another
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-5 rounded-2xl border border-border bg-card p-8"
          aria-label="Contact form"
        >
          {/* Name + Email row */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                Name <span className="text-destructive" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={!!errors.name}
                placeholder="Your name"
                className={cn(
                  "w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60",
                  "outline-none transition-colors focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30",
                  errors.name ? "border-destructive" : "border-border"
                )}
                {...register("name")}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                Email <span className="text-destructive" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
                placeholder="you@example.com"
                className={cn(
                  "w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60",
                  "outline-none transition-colors focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30",
                  errors.email ? "border-destructive" : "border-border"
                )}
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="contact-subject" className="text-sm font-medium text-foreground">
              Subject <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              aria-describedby={errors.subject ? "subject-error" : undefined}
              aria-invalid={!!errors.subject}
              placeholder="Internship opportunity / Research collaboration / General inquiry"
              className={cn(
                "w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60",
                "outline-none transition-colors focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30",
                errors.subject ? "border-destructive" : "border-border"
              )}
              {...register("subject")}
            />
            {errors.subject && (
              <p id="subject-error" role="alert" className="text-xs text-destructive">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
              Message <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={5}
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={!!errors.message}
              placeholder="Tell me about the opportunity or what you'd like to discuss..."
              className={cn(
                "w-full resize-none rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60",
                "outline-none transition-colors focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30",
                errors.message ? "border-destructive" : "border-border"
              )}
              {...register("message")}
            />
            {errors.message && (
              <p id="message-error" role="alert" className="text-xs text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Error state */}
          {status === "error" && (
            <div
              role="alert"
              className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
            >
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Something went wrong. Please email me directly at{" "}
              <a href="mailto:ranjalarjunshenoy@gmail.com" className="underline">
                ranjalarjunshenoy@gmail.com
              </a>
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="w-full gap-2 bg-cyan-500 text-black hover:bg-cyan-400 font-semibold"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
