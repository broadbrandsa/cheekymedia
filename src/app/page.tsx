import { SiteNav } from "@/components/sections/site-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { CaseSection } from "@/components/sections/case-section";
import { ScopeSection } from "@/components/sections/scope-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { InvestmentSection } from "@/components/sections/investment-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <HeroSection />
        <CaseSection />
        <ScopeSection />
        <ProcessSection />
        <WhyUsSection />
        <InvestmentSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
