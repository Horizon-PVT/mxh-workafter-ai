import { useTranslations } from "next-intl";

type ProofOfWorkCardProps = {
  goals: string[];
};

export function ProofOfWorkCard({ goals }: ProofOfWorkCardProps) {
  const t = useTranslations("rebuildPlan.proof");

  return (
    <section className="rounded-lg border border-teal-100 bg-white/90 p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
        {t("eyebrow")}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        {t("title")}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">
        {t("body")}
      </p>
      <div className="mt-6 grid gap-3">
        {goals.map((goal, index) => (
          <article key={goal} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              {t("outputLabel", { index: index + 1 })}
            </span>
            <p className="mt-2 text-base font-semibold leading-6 text-slate-950">{goal}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
