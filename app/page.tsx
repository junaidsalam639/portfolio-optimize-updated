"use client"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WorksSection } from "@/components/works-section"
import { ProcessSection } from "@/components/process-section"
import { TrustedSection } from "@/components/trusted-section"
import { CTASection } from "@/components/cta-section"
import { Testimonial } from "@/components/testimonial"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WorksSection />
      <ProcessSection />
      <Testimonial />
      <TrustedSection />
      <CTASection />
    </div>
  )
}
