/*
  flying.ts — flight training milestones.

  This is a plain typed array rather than a content collection. A collection
  earns its keep when each entry has a body of prose behind it, and these are
  single lines with a status, so the extra machinery would buy nothing.

  Nothing here carries a date, because the dates are not recorded anywhere I can
  cite and inventing them would be worse than leaving them out.
*/
export type MilestoneStatus = "complete" | "current" | "ahead";

export interface Milestone {
  label: string;
  status: MilestoneStatus;
}

export const milestones: Milestone[] = [
  { label: "Ground school through Sporty's", status: "complete" },
  { label: "First solo", status: "complete" },
  { label: "Solo cross country", status: "complete" },
  { label: "Night flying", status: "complete" },
  { label: "FAA written exam", status: "current" },
  { label: "Checkride", status: "ahead" },
];

export const statusLabel: Record<MilestoneStatus, string> = {
  complete: "Done",
  current: "Studying",
  ahead: "Ahead",
};
