"use client";

import { useEffect } from "react";

import { type AnalyticsEventName, trackEvent } from "@/lib/analytics";

type TrackPageViewProps = {
  eventName: AnalyticsEventName;
  properties?: Record<string, string | number | boolean>;
};

export function TrackPageView({ eventName, properties }: TrackPageViewProps) {
  useEffect(() => {
    trackEvent(eventName, properties);
  }, [eventName, properties]);

  return null;
}
