import { CTASection } from "@/components/cta-section"
import { ServicesSection } from "@/components/services-section"
import PageBanner from "@/components/page-banner"


export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageBanner title="OUR SERVICES" />
      <ServicesSection />
      <CTASection />
    </div>
  )
}
