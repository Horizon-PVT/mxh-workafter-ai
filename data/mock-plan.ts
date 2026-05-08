import type { RebuildPlan } from "@/types";

export const rebuildPlan: RebuildPlan = {
  title: "Your 30-Day Career Rebuild Plan",
  currentScore: 68,
  targetRole: "Customer Success AI Operator",
  nextSkill: "AI-assisted customer workflows",
  progressPercent: 18,
  currentWeek: 1,
  completedTasksCount: 2,
  nextAction: "List 5 tasks in your current role that AI can already assist.",
  weeklyRoadmap: [
    {
      week: 1,
      title: "Understand your risk",
      description:
        "Map the parts of your current work that are most exposed to automation and the human strengths worth protecting.",
      tasks: [
        { title: "Review your AI Disruption Score", status: "Done" },
        { title: "List 5 tasks AI can already assist", status: "In progress" },
        { title: "Choose one role direction to test", status: "Next" },
      ],
    },
    {
      week: 2,
      title: "Learn AI-assisted workflows",
      description:
        "Practice using AI as a workflow partner so your existing experience becomes more useful, not less visible.",
      tasks: [
        { title: "Rewrite your role into 3 AI-assisted directions", status: "Upcoming" },
        { title: "Compare 2 AI tools relevant to your work", status: "Upcoming" },
        { title: "Create one repeatable prompt workflow", status: "Upcoming" },
      ],
    },
    {
      week: 3,
      title: "Build proof-of-work projects",
      description:
        "Turn learning into a visible sample that shows how you solve a real work problem with AI support.",
      tasks: [
        { title: "Build 1 proof-of-work sample", status: "Upcoming" },
        { title: "Document before, process, and result", status: "Upcoming" },
        { title: "Ask one trusted person for feedback", status: "Upcoming" },
      ],
    },
    {
      week: 4,
      title: "Apply to rebuild-friendly opportunities",
      description:
        "Update your positioning and aim toward roles or projects where your AI-assisted workflow skills are useful.",
      tasks: [
        { title: "Update your profile headline for your target role", status: "Upcoming" },
        { title: "Draft a portfolio case study outline", status: "Upcoming" },
        { title: "Identify 5 rebuild-friendly opportunities", status: "Upcoming" },
      ],
    },
  ],
  dailyTasks: [
    {
      title: "List 5 tasks in your current role that AI can already assist",
      estimatedTime: "20 min",
      difficulty: "Easy",
      status: "In progress",
    },
    {
      title: "Rewrite your current role into 3 AI-assisted directions",
      estimatedTime: "30 min",
      difficulty: "Medium",
      status: "Next",
    },
    {
      title: "Compare 2 AI tools relevant to your work",
      estimatedTime: "25 min",
      difficulty: "Easy",
      status: "Upcoming",
    },
    {
      title: "Build 1 proof-of-work sample",
      estimatedTime: "90 min",
      difficulty: "Medium",
      status: "Upcoming",
    },
    {
      title: "Draft a portfolio case study outline",
      estimatedTime: "35 min",
      difficulty: "Medium",
      status: "Upcoming",
    },
    {
      title: "Update your profile headline for your target role",
      estimatedTime: "15 min",
      difficulty: "Easy",
      status: "Upcoming",
    },
  ],
  currentStrengths: [
    "Customer empathy",
    "Clear communication",
    "Context from real support conversations",
  ],
  skillsToBuildNext: [
    "Prompt workflows",
    "AI quality review",
    "Simple workflow automation",
    "Portfolio storytelling",
  ],
  skillGapSummary:
    "You already understand customer needs and communication. The gap is turning that experience into AI-assisted workflows and visible proof-of-work.",
  proofOfWorkGoals: [
    "1 small AI-assisted workflow",
    "1 proof-of-work sample",
    "1 portfolio story / case study",
  ],
};
