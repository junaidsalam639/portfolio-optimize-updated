"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import MorqueeSection from "./morquee-section"
import { services_data } from "@/data/service-data"
import { useRouter } from "next/navigation"

export function ServicesSection() {
  const router = useRouter();
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-white">
          <MorqueeSection title="OUR SERVICES" />
        </div>

        <div className="text-center my-12">
          <p className="text-white max-w-2xl mx-auto">
            Discover a diverse suite of technology solutions designed to optimize operations and fuel expansion. Explore
            our range of tailored services today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services_data?.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => router.push(`/services/${service.id}`)}
            >
              <Card className="h-full transition-all cursor-pointer duration-300 bg-white border-none hover:bg-[#ff0049] group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4 group-hover:bg-white">
                    <service.icon className="w-8 h-8 text-black group-hover:text-[#ff0049]" />
                  </div>
                  <h2 className="text-xl font-semibold text-black mb-2 group-hover:text-white">
                    {service.title}
                  </h2>
                  <div className="w-8 h-0.5 bg-[#ff0049] mb-3 group-hover:bg-white" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
