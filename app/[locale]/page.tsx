import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { RiskReportPreviewSection } from "@/components/sections/RiskReportPreviewSection";
import { WhoThisIsForSection } from "@/components/sections/WhoThisIsForSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#faf8fb] text-slate-950">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhoThisIsForSection />
        <HowItWorksSection />
        <FeaturesSection />
        <RiskReportPreviewSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
