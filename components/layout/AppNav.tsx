import Link from "next/link";

const appNavItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/scanner", label: "Risk Report" },
  { href: "/rebuild-plan", label: "Rebuild Plan" },
];

export function AppNav() {
  return (
    <nav
      aria-label="App navigation"
      className="mb-6 rounded-lg border border-white/80 bg-white/90 px-4 py-3 shadow-sm shadow-indigo-100/50"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          className="text-sm font-semibold text-indigo-700 transition hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          href="/"
        >
          Back to WorkAfterAI
        </Link>
        <div className="flex flex-wrap gap-2">
          {appNavItems.map((item) => (
            <Link
              key={item.href}
              className="inline-flex min-h-9 items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
