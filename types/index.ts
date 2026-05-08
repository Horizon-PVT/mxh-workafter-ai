export type AiSkillLevel =
  | "Beginner"
  | "Using AI sometimes"
  | "Using AI daily"
  | "Advanced";

export type UserProfile = {
  firstName: string;
  currentRole: string;
  experienceLevel: string;
  aiSkillLevel: AiSkillLevel;
  primaryGoal: string;
};

export type ScannerResult = {
  disruptionScore: number;
  riskLevel: string;
  supportiveExplanation: string;
  tasksAtRisk: RiskTask[];
  humanStrengths: HumanStrength[];
  pivotPaths: PivotPath[];
  skillsToBuild: SkillToBuild[];
};

export type RiskTask = {
  title: string;
  explanation: string;
};

export type HumanStrength = {
  title: string;
  explanation: string;
};

export type PivotPath = {
  title: string;
  whyItFits: string;
  firstSkill: string;
  difficulty: string;
};

export type SkillToBuild = {
  title: string;
  description: string;
};

export type RebuildPlanWeek = {
  week: number;
  title: string;
  description: string;
  tasks: PlanTask[];
};

export type PlanTask = {
  title: string;
  status: "Done" | "In progress" | "Next" | "Upcoming";
};

export type DailyRebuildTask = {
  title: string;
  estimatedTime: string;
  difficulty: "Easy" | "Medium";
  status: "Done" | "In progress" | "Next" | "Upcoming";
};

export type RebuildPlan = {
  title: string;
  currentScore: number;
  targetRole: string;
  nextSkill: string;
  progressPercent: number;
  currentWeek: number;
  completedTasksCount: number;
  nextAction: string;
  weeklyRoadmap: RebuildPlanWeek[];
  dailyTasks: DailyRebuildTask[];
  currentStrengths: string[];
  skillsToBuildNext: string[];
  skillGapSummary: string;
  proofOfWorkGoals: string[];
};

export type DashboardSummary = {
  firstName: string;
  disruptionScore: number;
  nextSkill: string;
  bestOpportunityMatch: string;
  todayTask: string;
  planProgressPercent: number;
  profileCompletionPercent: number;
  profileNextStep: string;
  nextMilestone: string;
  recommendedActions: DashboardAction[];
  opportunities: DashboardOpportunity[];
};

export type DashboardAction = {
  title: string;
  description: string;
  href: string;
};

export type DashboardOpportunity = {
  title: string;
  matchReason: string;
  firstSkillRequired: string;
};

export type OnboardingAnswers = {
  situation: string;
  currentJobTitle: string;
  industry: string;
  yearsOfExperience: string;
  dailyTasks: string[];
  aiSkillLevel: string;
  goal: string;
};
