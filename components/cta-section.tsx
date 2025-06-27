"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CTASection() {
  const router = useRouter()
  return (
    <section className="py-20 bg-[#ff0049]">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-100 text-sm font-medium mb-4">SO WHAT IS NEXT?</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Are You Ready? Let's
            <br />
            Get To Work!
          </h2>
          <Button
            size="lg"
            onClick={() => router.push("/contact")}
            className="bg-white text-[#E91E63] hover:bg-gray-100 px-8 py-3 font-semibold rounded-full"
            aria-label="Contact us via form or WhatsApp"
          >
            CONTACT US
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
