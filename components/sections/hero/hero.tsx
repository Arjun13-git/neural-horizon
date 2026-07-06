"use client";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroPhoto } from "./hero-photo";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <HeroContent />

          <div className="hidden items-center justify-center lg:flex">
            <HeroPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}