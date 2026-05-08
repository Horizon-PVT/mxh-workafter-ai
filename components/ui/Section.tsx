import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn("px-6 py-16 sm:py-20 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
