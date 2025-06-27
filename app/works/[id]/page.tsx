import { CTASection } from "@/components/cta-section";
import WorkDetailMain from "@/components/works/works-details/work-detail-main";

export default async function WorksDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div className="min-h-screen">
      <WorkDetailMain id={id} />
      <CTASection />
    </div>
  )
}

