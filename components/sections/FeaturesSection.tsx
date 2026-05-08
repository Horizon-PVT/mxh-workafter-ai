import { FeatureCard } from "@/components/ui/FeatureCard";
import { Section } from "@/components/ui/Section";

const features = [
  {
    title: "AI Disruption Score",
    description: "See which parts of your current role are changing fastest.",
    accent: "indigo" as const,
    icon: "68",
  },
  {
    title: "Career Rebuild Plan",
    description: "Move through a focused 30-day plan with practical daily tasks.",
    accent: "teal" as const,
    icon: "30",
  },
  {
    title: "Human Strength Mapping",
    description: "Protect the judgment, empathy, and context AI cannot easily replace.",
    accent: "amber" as const,
    icon: "HS",
  },
  {
    title: "Proof-of-Work Profile",
    description: "Turn learning into visible samples that show what you can do next.",
    accent: "indigo" as const,
    icon: "PW",
  },
  {
    title: "Rebuild-Friendly Opportunities",
    description: "Orient toward roles and projects where AI skills increase your value.",
    accent: "teal" as const,
    icon: "RO",
  },
];

export function FeaturesSection() {
  return (
    <Section id="features">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          MVP Features
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Clarity first, then action.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          WorkAfterAI keeps the first version focused on the core rebuild journey.
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
