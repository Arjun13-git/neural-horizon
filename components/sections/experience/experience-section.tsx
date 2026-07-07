import { getAllExperience } from "@/lib/content";
import { InternshipCards } from "./internship-cards";

export async function ExperienceSection() {
  const experiences = getAllExperience();

  return (
    <section
      id="experience"
      className="py-24 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Internships
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Hands-on engineering work and production-level internship experience
            that have shaped my approach to building real-world systems.
          </p>
        </div>

        <InternshipCards experiences={experiences} />
      </div>
    </section>
  );
}
