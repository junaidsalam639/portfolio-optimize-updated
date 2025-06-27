"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import MorqueeSection from "./morquee-section"

const clients = [
  { name: "Client 1", logo: "/images/partners/partner1.png" },
  { name: "Client 2", logo: "/images/partners/partner2.png" },
  { name: "Client 3", logo: "/images/partners/partner3.png" },
  { name: "Client 4", logo: "/images/partners/partner4.png" },
  { name: "Client 5", logo: "/images/partners/partner5.png" },
  { name: "Client 6", logo: "/images/partners/partner6.png" },
  { name: "Client 7", logo: "/images/partners/partner7.png" },
  { name: "Client 8", logo: "/images/partners/partner8.png" },
  { name: "Client 9", logo: "/images/partners/partner9.png" },
  { name: "Client 10", logo: "/images/partners/partner10.png" },
  { name: "Client 11", logo: "/images/partners/partner11.png" },
  { name: "Client 12", logo: "/images/partners/partner12.png" },
]

export function TrustedSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <MorqueeSection title="TRUSTED BY" />

        <div className="text-center my-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the ranks of esteemed partners and clients who have placed their trust in Creative Web Solutions for
            innovative solutions and reliable service.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-12 opacity-60">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={60}
                loading="lazy"
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
