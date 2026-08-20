// Local stand-in for Supabase until Auth, RLS, and Edge Functions are wired.

export const currentUser = {
  id: 1,
  fullName: "Alex Rivera",
  email: "alex@teamflow.dev",
  role: "admin",
};

export const workspace = {
  id: 1,
  name: "Northwind Delivery",
  plan: "team",
};

export const dashboardStats = [
  { label: "Active projects", value: "4" },
  { label: "Open issues", value: "18" },
  { label: "Sprint progress", value: "62%" },
  { label: "At-risk items", value: "3" },
];

export const issues = [
  {
    id: "TF-104",
    type: "bug",
    title: "Gantt bars overflow on narrow viewports",
    status: "in_progress",
    priority: "high",
    assignee: "Jordan Lee",
    epic: "Timeline",
  },
  {
    id: "TF-109",
    type: "story",
    title: "Invite members with role-based entitlements",
    status: "todo",
    priority: "high",
    assignee: "Alex Rivera",
    epic: "Identity",
  },
  {
    id: "TF-112",
    type: "task",
    title: "Wire notifications to email provider",
    status: "todo",
    priority: "medium",
    assignee: "Sam Okonkwo",
    epic: "Shared services",
  },
  {
    id: "TF-118",
    type: "bug",
    title: "Sprint board does not persist column order",
    status: "backlog",
    priority: "low",
    assignee: "Unassigned",
    epic: "Sprints",
  },
  {
    id: "TF-121",
    type: "story",
    title: "Natural-language search over issues via pgvector",
    status: "backlog",
    priority: "medium",
    assignee: "Unassigned",
    epic: "AI",
  },
];

export const sprintColumns = [
  {
    id: "todo",
    title: "To do",
    cards: ["TF-109", "TF-112"],
  },
  {
    id: "in_progress",
    title: "In progress",
    cards: ["TF-104"],
  },
  {
    id: "review",
    title: "Review",
    cards: [],
  },
  {
    id: "done",
    title: "Done",
    cards: [],
  },
];

export const notifications = [
  { id: 1, text: "Jordan commented on TF-104", time: "12m ago" },
  { id: 2, text: "Sprint 12 starts Monday", time: "2h ago" },
  { id: 3, text: "AI flagged TF-109 as a delivery risk", time: "Yesterday" },
];

export const aiInsights = {
  statusSummary:
    "Sprint 12 is 62% complete. Auth and the issue tracker are the critical path; the AI gateway is stubbed and not yet calling a live model.",
  risks: [
    { item: "TF-109", label: "schedule", note: "Blocks member invites and RLS testing." },
    { item: "TF-104", label: "quality", note: "Layout bug on the public timeline preview." },
    { item: "AI gateway", label: "dependency", note: "Usage logging and cost caps are not enforced yet." },
  ],
  priorities: [
    "Finish role-based invite flow before opening the workspace to more testers.",
    "Ship a responsive Gantt fix so the marketing preview matches the app.",
    "Connect the AI gateway to an approved model with prompt versioning.",
  ],
  workload:
    "Alex is at capacity on identity work. Jordan owns the timeline bug. Two backlog items are unassigned.",
};
