import type { DashboardSummary, UserProfile } from "@/types";

export const userProfile: UserProfile = {
  firstName: "Maya",
  currentRole: "Customer Support Specialist",
  experienceLevel: "Mid-level",
  aiSkillLevel: "Using AI sometimes",
  primaryGoal: "Protect my current role",
};

export const dashboardSummary: DashboardSummary = {
  firstName: userProfile.firstName,
  disruptionScore: 68,
  nextSkill: "AI-assisted customer workflows",
  bestOpportunityMatch: "Customer Success AI Operator",
  todayTask: "List 5 tasks in your current role that AI can already assist",
  planProgressPercent: 18,
  profileCompletionPercent: 35,
  profileNextStep: "Add one proof-of-work sample",
  nextMilestone: "Finish Week 1 risk mapping",
  recommendedActions: [
    {
      title: "Continue today's rebuild task",
      description: "Move the current task forward while the next step is clear.",
      href: "/rebuild-plan",
    },
    {
      title: "Build one proof-of-work sample",
      description: "Turn one AI-assisted workflow into visible evidence.",
      href: "/rebuild-plan",
    },
    {
      title: "Review your AI risk report",
      description: "Revisit the tasks and strengths shaping your plan.",
      href: "/scanner",
    },
  ],
  opportunities: [
    {
      title: "Customer Success AI Operator",
      matchReason:
        "Matches your support experience, communication strengths, and next AI workflow skill.",
      firstSkillRequired: "AI quality review for customer replies",
    },
    {
      title: "Workflow Automation Assistant",
      matchReason:
        "Builds on your knowledge of repeated tasks and where manual work slows teams down.",
      firstSkillRequired: "Automation basics with no-code tools",
    },
  ],
};
