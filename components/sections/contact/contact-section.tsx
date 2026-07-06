import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Let&apos;s Connect
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Open to internship opportunities, research collaborations,
            and engineering conversations.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
