import { Section } from "@/components/ui/Section";
import { useTranslations } from "next-intl";

export function WhoThisIsForSection() {
  const t = useTranslations("landing.who");
  const audiences = t.raw("audiences") as Array<{
    title: string;
    description: string;
    badge: string;
  }>;

  return (
    <Section id="who-this-is-for">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {audiences.map((audience) => (
          <article
            key={audience.title}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-md"
          >
            <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700 ring-1 ring-teal-100">
              {audience.badge}
            </span>
            <h3 className="mt-4 text-base font-semibold leading-6 text-slate-950">
              {audience.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{audience.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
