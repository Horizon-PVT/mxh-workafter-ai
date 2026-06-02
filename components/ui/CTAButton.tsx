"use client";

import type { ReactNode } from "react";

import { Link } from "@/i18n/routing";
import { type AnalyticsEventName, trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  analyticsEvent?: AnalyticsEventName;
  analyticsProperties?: Record<string, string | number | boolean>;
};

export function CTAButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  analyticsEvent,
  analyticsProperties,
}: CTAButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        size === "sm" ? "min-h-10 px-4 text-sm" : "min-h-12 px-6 text-sm sm:text-base",
        variant === "primary"
          ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700"
          : "border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-700",
        className,
      )}
      href={href}
      onClick={() => {
        if (analyticsEvent) {
          trackEvent(analyticsEvent, analyticsProperties);
        }
      }}
    >
      {children}
    </Link>
  );
}
