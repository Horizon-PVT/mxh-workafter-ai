"use client";

import { track } from "@vercel/analytics";

export type AnalyticsEventName =
  | "landing_cta_clicked"
  | "onboarding_started"
  | "onboarding_completed"
  | "scanner_viewed"
  | "rebuild_plan_started"
  | "dashboard_viewed";

export function trackEvent(
  name: AnalyticsEventName,
  properties?: Record<string, string | number | boolean>,
) {
  track(name, properties);
}
