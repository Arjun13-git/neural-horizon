import { getAllProjects } from "@/lib/content";
import { ProjectsGrid } from "./projects-grid";

export async function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <section
      id="projects"
      className="py-24 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Projects
          </p>
          <h2
            id="projects-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            What I&apos;ve Built
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            End-to-end systems spanning agentic AI, backend engineering, machine learning,
            and real-world applications. Each project is a complete system, not a tutorial.
          </p>
        </div>

        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
