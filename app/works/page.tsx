import PageBanner from "@/components/page-banner"
import { CTASection } from "@/components/cta-section"
import WorksTabs from "@/components/works/works-tabs"

export default function WorksPage() {

  return (
    <div className="min-h-screen">
      <PageBanner title="Our Works" />
      <WorksTabs />
      <CTASection />
    </div>
  )
}

