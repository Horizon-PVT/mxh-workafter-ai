# WorkAfterAI — Demo Guide

## One-liner

> From AI job anxiety to a clear next move.

WorkAfterAI scans your role, reveals which tasks are exposed to automation, suggests safer pivot paths, and builds a personalized 30-day career rebuild plan.

---

## Who It Is For

- Workers worried AI may replace parts of their job
- People recently laid off or losing clients
- Career switchers who want a practical direction
- Freelancers needing proof their work still matters
- Anyone who wants to become AI-ready without vague courses

---

## Problem

AI disruption is not about losing your entire job overnight. It is about specific daily tasks — writing, data entry, customer replies, admin work — becoming cheaper and faster to automate. Most people do not know which parts of their work are exposed, or what to do about it.

WorkAfterAI answers three questions:

1. **What is my AI job risk?**
2. **What should I learn or build next?**
3. **What can I do today to move forward?**

---

## 60-Second Demo Script

> Use this for a quick pitch or screen recording.

1. Open the landing page (`/en`).
2. Point out the hero: *"Work changed. You are not finished."*
3. Click **"Check My AI Job Risk"** — this opens the onboarding flow.
4. Fast-click through onboarding:
   - Situation: *"I'm worried AI may replace parts of my job"*
   - Role: *Customer Support Specialist*, industry: *Software*, 5 years
   - Tasks: *Writing*, *Customer support*, *Admin work*, *Data entry*
   - AI Skill: *Using AI sometimes*
   - Goal: *Protect my current role*
5. Submit. Arrive at the **Scanner** page showing a personalized AI Disruption Score.
6. Scroll briefly to show risk tasks, human strengths, pivot paths, and skills.
7. Click **"Start My Rebuild Plan"** — arrive at a personalized 30-day plan.
8. Say: *"Every result you just saw was personalized from your answers — no generic templates."*

**Total time: ~60 seconds**

---

## 3-Minute Demo Script

> Use this for investor meetings, partner demos, or detailed walkthroughs.

### Act 1 — The Problem (30s)

1. Open `/en`. Read the hero message.
2. Scroll to the **Problem** section: *"The threat is not your whole job. It is the tasks inside it."*
3. Scroll to **Who It Helps** — five audience profiles.
4. Scroll to **How It Works** — four-step visual process.

### Act 2 — The Scan (60s)

5. Click **"Check My AI Job Risk"**.
6. Walk through onboarding step by step (use the test scenario below).
7. On the Summary screen, point out the personalized labels reflecting answers.
8. Click **"View My AI Risk Report"**.

### Act 3 — The Report (45s)

9. Show the **AI Disruption Score** (e.g., 69/100 for the test scenario below).
10. Scroll to **Tasks at Risk** — explain these were selected from the user's daily tasks.
11. Scroll to **Human Strengths** — emphasize these are worth protecting.
12. Scroll to **Pivot Paths** — note these are matched to the user's task profile and goal.
13. Scroll to **Skills to Build** — practical, not vague.

### Act 4 — The Plan (30s)

14. Click **"Start My Rebuild Plan"**.
15. Show the summary cards: AI score, target role, next skill, progress.
16. Scroll to the **Weekly Roadmap** — note Week 1 tasks are personalized to the user's job title.
17. Show **Daily Tasks** — actionable, timed, difficulty-tagged.

### Act 5 — The Dashboard (15s)

18. Navigate to **Dashboard** (`/en/dashboard`).
19. Show the welcome message, today's task, progress bar, and recommended actions.
20. Say: *"This is where the user returns every day. One clear task. No overwhelm."*

### Closing

> *"We built this as an AI-native product. No signup. No resume. No cost. Just a clearer starting point."*

**Total time: ~3 minutes**

---

## Test Scenario — Sample Onboarding Answers

Use these answers for a reproducible demo:

| Step | Answer |
|---|---|
| Situation | I'm worried AI may replace parts of my job |
| Job Title | Customer Support Specialist |
| Industry | Software |
| Years of Experience | 5 |
| Daily Tasks | Writing, Customer support, Admin work, Data entry |
| AI Skill Level | Using AI sometimes |
| Goal | Protect my current role |

---

## Expected Output

After completing onboarding with the answers above:

### Scanner Page

| Field | Expected Value |
|---|---|
| AI Disruption Score | **69/100** |
| Risk Level | Medium Risk |
| Tasks at Risk | Data entry, Writing, Customer support (top 3 by weight) |
| Human Strengths | Empathy, Communication, Taste / quality control, Judgment |
| Top Pivot Path | Customer Success AI Operator |
| First Skill to Build | AI customer reply review |

### Rebuild Plan Page

| Field | Expected Value |
|---|---|
| Target Role | Customer Success AI Operator |
| Next Skill | AI customer reply review |
| Progress | 18% |
| Week 1 Task | "List 5 tasks in your current role (Customer Support Specialist) that AI can already assist" |
| Daily Task 3 | "Compare 2 AI tools relevant to Software or your tasks" |

### Dashboard Page

| Field | Expected Value |
|---|---|
| AI Disruption Score | 69/100 |
| Next Skill | AI customer reply review |
| Best Opportunity | Customer Success AI Operator |
| Today's Task | Personalized to role and industry |

---

## Locale Support

The product supports three languages:

| Locale | Route | Status |
|---|---|---|
| English | `/en` | ✅ Full support |
| Vietnamese | `/vi` | ✅ Full support |
| Japanese | `/ja` | ✅ Full support |

Switch locale via the language switcher in the header. Onboarding answers are locale-normalized — answering in Vietnamese produces the same scoring as answering in English.

---

## Known MVP Limitations

1. **No authentication** — no user accounts, login, or signup.
2. **No database** — all data is stored in browser localStorage only. Clearing browser data resets everything.
3. **No real AI API** — scoring uses a local rule-based engine (TypeScript), not a machine learning model.
4. **No payment** — the product is free in MVP.
5. **No community features** — no feed, no profiles, no social interaction.
6. **No job board** — no real job listings or employer connections.
7. **Task progress is not persisted** — checking off tasks in the rebuild plan does not save state.
8. **Score is deterministic** — the same onboarding answers always produce the same score and recommendations.
9. **Limited role coverage** — pivot paths and skills are drawn from a curated set, not a dynamic database.
10. **Single-session flow** — the full onboarding-to-dashboard flow is designed for a single browser session; cross-device sync is not supported.

---

## Next Roadmap Phases

| Phase | Description | Status |
|---|---|---|
| 1.0–1.5 | MVP: Landing, Onboarding, Scanner, Rebuild Plan, Dashboard with rule-based personalization | ✅ Done |
| 1.6 | UI polish and fallback banner copy | ✅ Done |
| 1.7 | Landing conversion polish and localization encoding fix | ✅ Done |
| 1.8 | Vercel deployment preparation | ✅ Done |
| 1.9 | Post-deploy QA and demo package | ✅ Current |
| 2.0 | Authentication and user accounts | 🔜 Planned |
| 2.1 | Database persistence (Supabase or similar) | 🔜 Planned |
| 2.2 | Community feed and proof-of-work profiles | 🔜 Planned |
| 2.3 | Real AI-powered scanner (OpenAI / Gemini integration) | 🔜 Planned |
| 2.4 | Micro-jobs and rebuild-friendly opportunities board | 🔜 Planned |
| 2.5 | Payments and premium features | 🔜 Planned |

---

## Quick Links

| Page | Route |
|---|---|
| Landing (EN) | `/en` |
| Landing (VI) | `/vi` |
| Landing (JA) | `/ja` |
| Onboarding | `/en/onboarding` |
| Scanner | `/en/scanner` |
| Rebuild Plan | `/en/rebuild-plan` |
| Dashboard | `/en/dashboard` |

---

*WorkAfterAI — Work changed. You are not finished.*
