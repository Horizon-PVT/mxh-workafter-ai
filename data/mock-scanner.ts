import type { ScannerResult } from "@/types";

export const scannerResult: ScannerResult = {
  disruptionScore: 68,
  riskLevel: "Medium Risk",
  supportiveExplanation:
    "Your role is not disappearing overnight — but these tasks are becoming easier to automate.",
  tasksAtRisk: [
    {
      title: "Basic writing",
      explanation:
        "First drafts, summaries, and repeatable content can now be produced quickly with AI assistance.",
    },
    {
      title: "Data entry",
      explanation:
        "Structured information can be extracted, cleaned, and moved between tools with fewer manual steps.",
    },
    {
      title: "Repetitive customer replies",
      explanation:
        "Common questions and routine responses are increasingly handled by templates and AI support tools.",
    },
  ],
  humanStrengths: [
    {
      title: "Judgment",
      explanation: "Choosing the right action when the situation is unclear.",
    },
    {
      title: "Empathy",
      explanation: "Reading emotion, trust, urgency, and context in human conversations.",
    },
    {
      title: "Domain context",
      explanation: "Knowing what matters in your team, customers, market, and workflow.",
    },
    {
      title: "Communication",
      explanation: "Explaining decisions clearly and adapting tone to the person receiving it.",
    },
    {
      title: "Taste / quality control",
      explanation: "Spotting weak output and raising the standard before work ships.",
    },
  ],
  pivotPaths: [
    {
      title: "AI Content Strategist",
      whyItFits:
        "Your writing and communication experience can shift from producing every draft to directing useful AI-assisted content.",
      firstSkill: "Prompt workflows for briefs, drafts, and edits",
      difficulty: "Moderate, 3-5 weeks",
    },
    {
      title: "Workflow Automation Assistant",
      whyItFits:
        "Your knowledge of repeated tasks can become a strength when you map and improve manual workflows.",
      firstSkill: "Automation basics with no-code tools",
      difficulty: "Moderate, 4-6 weeks",
    },
    {
      title: "Customer Success AI Operator",
      whyItFits:
        "Support experience, empathy, and product context are valuable when paired with AI-assisted response systems.",
      firstSkill: "AI quality review for customer replies",
      difficulty: "Accessible, 2-4 weeks",
    },
  ],
  skillsToBuild: [
    {
      title: "Prompt workflows",
      description: "Build repeatable prompts for drafting, editing, triage, and decision support.",
    },
    {
      title: "AI-assisted research",
      description: "Use AI to compare, summarize, and organize information without losing context.",
    },
    {
      title: "Automation basics",
      description: "Learn how tasks move between tools and where simple automation can help.",
    },
    {
      title: "Quality control",
      description: "Review AI output for accuracy, tone, edge cases, and user impact.",
    },
    {
      title: "Portfolio storytelling",
      description: "Turn your rebuild work into proof that explains the problem, process, and result.",
    },
  ],
};
