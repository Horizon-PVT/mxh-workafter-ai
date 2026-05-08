import Link from "next/link";

import { CTAButton } from "@/components/ui/CTAButton";

const navItems = [
  { href: "#problem", label: "Problem" },
  { href: "#who-this-is-for", label: "Who It Helps" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-indigo-100/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="WorkAfterAI home">
          <span className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-teal-600 text-sm font-bold text-white shadow-sm shadow-indigo-200">
            WA
          </span>
          <span>
            <span className="block text-base font-semibold tracking-tight text-slate-950">
              WorkAfterAI
            </span>
            <span className="hidden text-xs font-medium text-slate-500 md:block">
              AI Career Rebuild Platform
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link key={item.href} className="transition hover:text-indigo-700" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <CTAButton href="/onboarding" size="sm">
            Check My AI Job Risk
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
