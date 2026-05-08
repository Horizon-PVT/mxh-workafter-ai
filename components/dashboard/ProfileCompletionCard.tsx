type ProfileCompletionCardProps = {
  percent: number;
  nextStep: string;
};

export function ProfileCompletionCard({ percent, nextStep }: ProfileCompletionCardProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white/90 p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
        Proof-of-work Profile
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        Profile completion: {percent}%
      </h2>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-teal-500" style={{ width: `${percent}%` }} />
      </div>
      <div className="mt-5 rounded-lg bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Suggested next step
        </p>
        <p className="mt-2 text-base font-semibold leading-6 text-slate-950">{nextStep}</p>
      </div>
    </section>
  );
}
