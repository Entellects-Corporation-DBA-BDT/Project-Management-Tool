// Mock data describing the platform - stands in for a real features/CMS API.

export const coreTools = [
  {
    id: "gantt",
    icon: "📊",
    title: "Gantt Chart",
    description:
      "Visualize your entire timeline. As tasks progress, every change is automatically reflected on the chart.",
  },
  {
    id: "workload",
    icon: "👥",
    title: "Workload Management",
    description:
      "See exactly who is working on what, spot overallocation early, and rebalance your team in a click.",
  },
  {
    id: "dashboards",
    icon: "📈",
    title: "Dashboards",
    description:
      "Real-time, shareable dashboards give leadership visibility into progress across every project.",
  },
  {
    id: "automations",
    icon: "⚙️",
    title: "Automations",
    description:
      "Automate repetitive status updates, approvals, and hand-offs so your team can focus on real work.",
  },
  {
    id: "integrations",
    icon: "🔗",
    title: "Integrations",
    description:
      "Connect the tools you already use so any technology, on any platform, lives in one workspace.",
  },
];

export const workspaceSteps = [
  {
    step: 1,
    title: "Create your workspace",
    description: "Spin up a dedicated space for your team in seconds.",
  },
  {
    step: 2,
    title: "Build your project structure",
    description:
      "Set up a well-organized environment so work is managed productively and intuitively.",
  },
  {
    step: 3,
    title: "Invite your team",
    description: "Bring collaborators in from any technology or platform, anywhere in the world.",
  },
];

export const valueProps = [
  {
    id: "plan",
    title: "Plan, execute, and track projects of any size",
    description:
      "Easily assign tasks and prioritize what's most important. Set timelines, milestones, and dependencies, and manage your team's entire workload all in one place.",
  },
  {
    id: "love",
    title: "The platform your team will actually love to use",
    description:
      "Collaborate seamlessly across teams and departments to gain visibility into the progress of your work, on a platform they'll enjoy using every day.",
  },
  {
    id: "flexible",
    title: "100% customizable and flexible to fit any workflow",
    description:
      "There are many ways to manage a project. Shape your workflow to fit your team - for any project, process, department, or customer.",
  },
];

// Sample rows for the fake Gantt chart preview, timeline expressed as
// week offsets/spans across a 6-week window.
export const ganttTasks = [
  { id: 1, name: "Discovery & Planning", startWeek: 0, duration: 1, progress: 100, color: "#6366f1" },
  { id: 2, name: "Project Structure Setup", startWeek: 1, duration: 1, progress: 100, color: "#22c55e" },
  { id: 3, name: "Design Milestone", startWeek: 2, duration: 2, progress: 65, color: "#f59e0b" },
  { id: 4, name: "Development Sprint", startWeek: 3, duration: 2, progress: 40, color: "#0ea5e9" },
  { id: 5, name: "QA & Review", startWeek: 5, duration: 1, progress: 10, color: "#ec4899" },
];
