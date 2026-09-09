/*
  format.ts — date formatting shared by the project index and detail pages.

  YAML dates parse as midnight UTC. Formatting them in the machine's local
  timezone can roll the date back a day and show the wrong month, so the
  timezone is pinned to UTC here.
*/
export function monthYear(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function dateRange(started: Date, ended?: Date): string {
  return ended
    ? `${monthYear(started)} to ${monthYear(ended)}`
    : `${monthYear(started)} to present`;
}
