import { SiteNav } from "@/components/sections/site-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { CaseSection } from "@/components/sections/case-section";
import { AuditSection } from "@/components/sections/audit-section";
import { ScopeSection } from "@/components/sections/scope-section";
import { CollaborationSection } from "@/components/sections/collaboration-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { InvestmentSection } from "@/components/sections/investment-section";
import { HostingSection } from "@/components/sections/hosting-section";
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
        <AuditSection />
        <ScopeSection />
        <CollaborationSection />
        <ProcessSection />
        <WhyUsSection />
        <InvestmentSection />
        <HostingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
