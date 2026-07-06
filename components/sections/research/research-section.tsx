import { getAllResearch } from "@/lib/content";
import { ResearchGrid } from "./research-grid";

export async function ResearchSection() {
  const research = getAllResearch();

  return (
    <section
      id="research"
      className="py-24 px-6"
      aria-labelledby="research-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Research
          </p>
          <h2
            id="research-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Research &amp; Exploration
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Academic investigations at the frontier of Quantum Machine Learning
            and AI systems. Where engineering meets scientific inquiry.
          </p>
        </div>

        <ResearchGrid papers={research} />
      </div>
    </section>
  );
}
