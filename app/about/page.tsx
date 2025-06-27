import AboutStats from "@/components/about/about-stats"
import PageBanner from "@/components/page-banner"
import AboutInfo from "@/components/about/about-info"
import { TrustedSection } from "@/components/trusted-section"
import { CTASection } from "@/components/cta-section"



export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageBanner title="About Us" />
      <AboutInfo />
      <AboutStats />
      <TrustedSection />
      <CTASection />
    </div>
  )
}
