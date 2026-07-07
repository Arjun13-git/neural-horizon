export function AvailabilityPill() {
  return (
    <div className="inline-flex flex-col gap-1.5">
      <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        Available for Placements
      </div>
      <p className="text-xs text-muted-foreground pl-1">
        Currently working as{" "}
        <span className="font-semibold text-foreground">Software Engineering Intern</span>{" "}
        at{" "}
        <span className="font-semibold text-cyan-400">Datavex AI Pvt Ltd</span>
      </p>
    </div>
  );
}