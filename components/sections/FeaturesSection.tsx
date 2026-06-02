import { FeatureCard } from "@/components/ui/FeatureCard";
import { Section } from "@/components/ui/Section";
import { useTranslations } from "next-intl";

export function FeaturesSection() {
  const t = useTranslations("landing.features");
  const features = t.raw("cards") as Array<{
    title: string;
    description: string;
    accent: "indigo" | "teal" | "amber";
    icon: string;
  }>;

  return (
    <Section id="features">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {t("body")}
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}
