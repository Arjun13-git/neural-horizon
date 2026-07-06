export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      role="status"
      aria-label="Loading Neural Horizon"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing core */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-cyan-500/20" />
          <div className="absolute h-10 w-10 animate-pulse rounded-full bg-cyan-500/30" />
          <div className="h-4 w-4 rounded-full bg-cyan-400" />
        </div>

        {/* Brand name */}
        <div className="text-center">
          <p className="font-heading text-sm font-semibold tracking-widest text-foreground uppercase">
              Arjun Shenoy R
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Loading…</p>
        </div>
      </div>
    </div>
  );
}
