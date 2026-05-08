import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="font-medium text-slate-800">WorkAfterAI</p>
        <p>Work changed. You are not finished.</p>
        <Link className="font-semibold text-indigo-700 transition hover:text-indigo-900" href="/onboarding">
          Check My AI Job Risk
        </Link>
      </div>
    </footer>
  );
}
