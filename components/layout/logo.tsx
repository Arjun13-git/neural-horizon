import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10">
        <span className="font-heading text-sm font-bold text-cyan-400">
          AS
        </span>
      </div>

      <div>
        <p className="font-heading text-base font-bold leading-tight">
          Arjun Shenoy R
        </p>
        <p className="text-xs text-muted-foreground">
          AI · Research · Engineering
        </p>
      </div>
    </Link>
  );
}