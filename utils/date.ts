/**
 * Format a date string to a readable format.
 * @param dateStr - ISO date string or "Present"
 * @param format - Output format
 */
export function formatDate(
  dateStr: string,
  format: "short" | "long" | "year" = "long"
): string {
  if (dateStr === "Present" || dateStr === "present") return "Present";

  const date = new Date(dateStr);

  if (isNaN(date.getTime())) return dateStr;

  switch (format) {
    case "short":
      return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    case "year":
      return date.getFullYear().toString();
    case "long":
    default:
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
  }
}

/**
 * Format a date range from start to end.
 */
export function formatDateRange(start: string, end?: string): string {
  const startFormatted = formatDate(start, "short");
  const endFormatted = end ? formatDate(end, "short") : "Present";
  return `${startFormatted} – ${endFormatted}`;
}

/**
 * Returns relative time like "2 months ago".
 */
export function relativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return "Today";
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  }
  const years = Math.floor(diffDays / 365);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}
