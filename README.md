# WorkAfterAI

WorkAfterAI is an MVP career rebuilding platform for people affected by AI job disruption.

The product helps users understand their AI job risk, identify automatable tasks, choose safer pivot paths, and follow a practical 30-day rebuild plan.

## Tech Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Local mock data

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run quality checks:

```bash
npm run lint
npm run build
```

Run the production build locally:

```bash
npm run build
npm run start
```

## MVP Routes

- `/` - Public landing page
- `/onboarding` - Multi-step onboarding flow
- `/scanner` - AI Job Risk Scanner result
- `/rebuild-plan` - 30-day Career Rebuild Plan
- `/dashboard` - Basic dashboard command center

## Current Limitations

- Uses mock data only.
- No authentication.
- No database.
- No payments.
- No backend routes.
- No external AI API integration.
- Dashboard tasks and profile completion are static placeholders.

## Deployment Notes

This app is ready for a standard Vercel deployment as a Next.js project.

Recommended Vercel settings:

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: default Next.js output

No environment variables are required for the current MVP.
