import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero/hero";
import { AboutSection } from "@/components/sections/about/about-section";
import { SkillsSection } from "@/components/sections/skills/skills-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { ResearchSection } from "@/components/sections/research/research-section";
import { AchievementsSection } from "@/components/sections/achievements/achievements-section";
import { CertificationsSection } from "@/components/sections/certifications/certifications-section";
// Blog is hidden — import kept for future re-enabling
// import { BlogSection } from "@/components/sections/blog/blog-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="overflow-x-hidden">
        {/* Hero — full viewport */}
        <Hero />

        {/* About */}
        <AboutSection />

        {/* Skills */}
        <SkillsSection />

        {/* Experience / Internships */}
        <ExperienceSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Research */}
        <ResearchSection />

        {/* Competitions & Experience */}
        <AchievementsSection />

        {/* Certifications */}
        <CertificationsSection />

        {/* Blog — hidden; re-enable by uncommenting below */}
        {/* <BlogSection /> */}

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}