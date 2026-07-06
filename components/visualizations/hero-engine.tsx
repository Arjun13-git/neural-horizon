"use client";

import { AICore } from "./ai-core";
import { HeroNetwork } from "./hero-network";

import { SystemStatus } from "@/components/hero/system-status";
import { OrbitSystem } from "./orbit-system";
import { OceanGlow } from "./ocean-glow";
import { Network } from "./network";

export function HeroEngine() {
  return (
    <div className="relative h-[650px] w-full">
        <OceanGlow />
      <Network />

      <HeroNetwork />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">

    <OrbitSystem />

    <AICore />

</div>
      </div>

      <div className="absolute bottom-10 left-10 z-20">
        <SystemStatus />
      </div>

    </div>
  );
}