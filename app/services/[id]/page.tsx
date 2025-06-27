import { CTASection } from "@/components/cta-section";
import ServicesDetails from "@/components/services/services-details";

export default async function ServicesDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div className="min-h-screen">
      <ServicesDetails id={id} />
      <CTASection />
    </div>
  )
}
