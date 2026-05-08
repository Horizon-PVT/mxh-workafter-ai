# AGENTS.md — WorkAfterAI

## Project Overview

WorkAfterAI is a career rebuilding platform for people affected by AI job disruption.

The product helps users:
- understand their AI job risk
- identify which daily tasks are vulnerable to automation
- discover safer skill paths
- create a 30-day career rebuild plan
- build proof-of-work projects
- eventually connect with community support and micro-job opportunities

Core positioning:

> Work changed. You are not finished.

Secondary message:

> From AI job anxiety to a clear next move.

This product should feel human, practical, hopeful, and AI-native. It must not feel like a generic job board, LinkedIn clone, or cold HR platform.

---

## Current MVP Scope

Build only the MVP first.

MVP screens:

1. Public Landing Page
2. Onboarding Flow
3. AI Job Risk Scanner Result
4. Career Rebuild Plan
5. Basic Dashboard

Phase 2 screens, do not build unless explicitly requested:

1. Community Feed
2. Proof-of-Work Profile
3. Micro-jobs Opportunities
4. Authentication
5. Database
6. Payments
7. Real AI API integration

---

## Tech Stack

Use the existing Next.js project.

Required stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- React components
- Local mock data first

Preferred UI approach:
- Reusable components
- Clean component composition
- Responsive layouts
- Semantic HTML
- Accessible buttons, labels, and forms

Do not add new libraries unless there is a clear reason and the user approves.

Do not add:
- authentication
- database
- payment
- external APIs
- complex state management
- backend routes

unless explicitly requested.

---

## Design Direction

The UI should feel:

- warm
- modern
- premium
- calm
- supportive
- human
- hopeful
- AI-native
- practical
- clean and spacious

Avoid:
- LinkedIn-like design
- generic corporate job-board style
- dark, depressing visuals
- aggressive red warning-heavy UI
- cluttered dashboards
- overly playful toy-like startup visuals

Recommended visual language:
- soft indigo / purple as primary
- teal / green as supportive growth color
- warm coral or amber for action and gentle warning
- white and soft gray backgrounds
- rounded cards
- subtle shadows
- clear information hierarchy

---

## Core UX Principles

The product must answer three user questions quickly:

1. What is my AI job risk?
2. What should I learn or build next?
3. What can I do today to move forward?

Every page should reduce anxiety and create action.

The product should transform:

Fear → Clarity → Skill → Proof → Opportunity

Do not shame the user.
Do not use language that makes the user feel obsolete.

Avoid phrases like:
- your job is doomed
- AI will replace you
- you are behind
- you failed

Prefer phrases like:
- your role is changing
- these tasks are becoming easier to automate
- your experience still has value
- here is your next move
- small steps count

---

## Product Copy Guidelines

Use clear, direct English.

Primary headline:

> Work changed. You are not finished.

Primary CTA:

> Check My AI Job Risk

Secondary CTAs:
- See How It Works
- Start My Rebuild Plan
- View My AI Risk Report
- Continue Today’s Rebuild Task

Preferred terms:
- AI Disruption Score
- AI Job Risk
- Rebuild Plan
- Proof-of-Work
- Pivot Paths
- Human Strengths
- Rebuild-Friendly Opportunities
- Next Skill to Build

Avoid vague CTAs:
- Get Started
- Learn More
- Submit
- Continue, when a more specific action is possible

---

## Routes

Use these routes for MVP:

- `/` — Landing Page
- `/onboarding` — Multi-step onboarding
- `/scanner` — AI Job Risk Scanner Result
- `/rebuild-plan` — Career Rebuild Plan
- `/dashboard` — Basic Dashboard

Do not create extra routes unless explicitly requested.

---

## Recommended Project Structure

Use or create this structure:

```txt
app/
  page.tsx
  onboarding/
    page.tsx
  scanner/
    page.tsx
  rebuild-plan/
    page.tsx
  dashboard/
    page.tsx

components/
  layout/
  sections/
  onboarding/
  scanner/
  dashboard/
  rebuild-plan/
  ui/

data/
  mock-user.ts
  mock-scanner.ts
  mock-plan.ts

types/
  index.ts

lib/
  utils.ts

Keep files small and readable.

Component Guidelines

Prefer reusable components such as:

AppShell
Header
Footer
Section
CTAButton
FeatureCard
ScoreCard
ProgressCard
TaskCard
StepIndicator
ChoiceCard
RiskBadge
SkillBadge

Avoid large monolithic page files.

If a page becomes long, extract sections into components.

Landing Page Requirements

Route: /

Landing sections:

Hero
Problem section
Who this is for
How it works
Feature cards
AI Risk Report preview
Final CTA
Footer

Hero copy:

Headline:

Work changed. You are not finished.

Subheadline:

Understand your AI job risk, rebuild your skills, prove your value, and find your next opportunity in the age of AI.

Primary CTA:

Check My AI Job Risk

Secondary CTA:

See How It Works

Primary CTA navigates to /onboarding.

The hero preview should clearly show this is an AI Job Risk product, not a generic analytics dashboard.

Suggested hero preview content:

AI Disruption Score: 68/100
High-risk tasks:
Basic writing
Data entry
Repetitive customer replies
Safer pivot paths:
AI Content Strategist
Workflow Automation Assistant
Customer Success AI Operator
Onboarding Requirements

Route: /onboarding

Build a multi-step flow.

Steps:

Welcome
Situation selection
Role and experience
Daily tasks
AI skill level
Goal
Scan summary

Use client-side state.

Requirements:

progress indicator
back button
next button
card-based choices
mobile responsive
save answers to localStorage if simple
final CTA navigates to /scanner

Situation options:

I’m worried AI may replace parts of my job
I recently lost my job or clients
I want to switch careers
I want to become AI-ready
I need small projects or income now

Daily task options:

Writing
Customer support
Design
Admin work
Data entry
Research
Management
Sales
Operations
Video editing
Social media content
Data analysis

AI skill level:

Beginner
Using AI sometimes
Using AI daily
Advanced

Goal options:

Protect my current role
Find a new job
Build freelance income
Switch careers
Create a proof-of-work portfolio
AI Job Risk Scanner Result Requirements

Route: /scanner

Use mock data first.

Show:

AI Disruption Score
Risk level
Tasks AI can replace first
Human strengths to protect
Best pivot paths
Skills to build next
30-day rebuild plan preview
CTA to /rebuild-plan
CTA to /dashboard

Tone:
Reassuring, practical, and not fear-based.

Use this type of copy:

Your role is not disappearing overnight — but these tasks are becoming easier to automate.

Career Rebuild Plan Requirements

Route: /rebuild-plan

Show:

30-day plan overview
current AI Disruption Score
target role
next skill to build
progress
weekly roadmap
daily tasks
skill gap section
proof-of-work task section
CTA: Continue Today’s Rebuild Task

Roadmap:

Week 1: Understand your risk
Week 2: Learn AI-assisted workflows
Week 3: Build proof-of-work projects
Week 4: Apply to rebuild-friendly opportunities

Make tasks specific and actionable.

Avoid vague tasks like:

improve confidence
learn more
research AI

Prefer:

list 5 daily tasks AI can already automate
rewrite your current role into 3 AI-assisted job directions
build one proof-of-work sample this week
update your profile headline for your target pivot role
Dashboard Requirements

Route: /dashboard

Dashboard should answer:

Where am I now?
What should I do next?
What opportunity is closest?

Show:

welcome message
AI Disruption Score
Next Skill to Build
Best Opportunity Match
Today’s Rebuild Task
30-day progress
Rebuild Plan preview
Profile completion placeholder
Recommended next actions

Do not build full community, jobs, or profile systems yet.

Mock Data

Use local mock data.

Do not call external APIs yet.

Recommended mock objects:

userProfile
scannerResult
rebuildPlan
dashboardSummary

Keep mock data in /data.

Define shared types in /types.

Development Commands

Use the existing package manager detected in the repo.

Common commands:

npm install
npm run dev
npm run lint
npm run build

Before finishing a task:

run lint if available
run build if reasonable
report any errors honestly
Task Execution Rules

When given a task:

Read this file first.
Inspect the relevant project files.
Make the smallest clean implementation that satisfies the request.
Do not expand scope.
Do not add backend/auth/database/payment unless explicitly requested.
Keep UI responsive.
Keep components reusable.
Do not delete existing work unless necessary.
Report changed files.
Explain how to test locally.
Final Response Format for Coding Agents

After completing a task, respond with:

Summary:
- ...

Files changed:
- ...

Components created:
- ...

Assumptions:
- ...

How to test:
- ...

Known limitations:
- ...
Non-Negotiables
Do not build the entire app in one step.
Do not invent new product features.
Do not add backend prematurely.
Do not use fake statistics on landing pages without sources.
Do not make the app feel like LinkedIn.
Do not make the product feel depressing or fear-based.
Do not hide core CTA behind vague language.
Do not create huge single-file components.