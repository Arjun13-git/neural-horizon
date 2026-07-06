import { getAllCertifications } from "@/lib/content";
import { CertificationsGrid } from "./certifications-grid";

export async function CertificationsSection() {
  const certifications = getAllCertifications();

  return (
    <section
      id="certifications"
      className="py-24 px-6"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Certifications
          </p>
          <h2
            id="certifications-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Certifications &amp; Training
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Verified credentials and formal training programs.
          </p>
        </div>

        <CertificationsGrid certifications={certifications} />
      </div>
    </section>
  );
}
