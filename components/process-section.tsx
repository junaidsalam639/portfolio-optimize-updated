"use client"
import MorqueeSection from "./morquee-section"
import { motion } from "framer-motion";
import {
  FileText,
  Palette,
  Code,
  TestTube,
  Rocket,
  Settings,
} from "lucide-react";

const developmentSteps = [
  {
    id: 1,
    title: "REQUIREMENT ANALYSIS",
    icon: FileText,
    position: { top: "12%", left: "10%" },
    delay: 0.2
  },
  {
    id: 2,
    title: "DESIGN",
    icon: Palette,
    position: { top: "12%", right: "10%" },
    delay: 0.4
  },
  {
    id: 3,
    title: "DEVELOPMENT",
    icon: Code,
    position: { top: "40%", right: "0%" },
    delay: 0.6
  },
  {
    id: 4,
    title: "TESTING",
    icon: TestTube,
    position: { bottom: "15%", right: "10%" },
    delay: 0.8
  },
  {
    id: 5,
    title: "DEPLOYMENT",
    icon: Rocket,
    position: { bottom: "15%", left: "10%" },
    delay: 1.0
  },
  {
    id: 6,
    title: "MAINTENANCE",
    icon: Settings,
    position: { top: "40%", left: "0%" },
    delay: 1.2
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-[url('/images/process/bg-process.webp')] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-white">
          <MorqueeSection title="WORK PROCESS" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed text-center my-5 max-w-2xl mx-auto">
            Discover our streamlined work process, meticulously designed to deliver exceptional results efficiently and effectively.
          </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 flex items-center justify-center"
        >
          <div className="relative w-96 h-96 md:w-[600px] md:h-[600px] bg-[url('/images/process/bg-process-center.webp')] bg-cover bg-center bg-no-repeat">
            <div className="absolute top-1/2 left-1/2 md:w-[400px] md:h-[400px] -translate-x-1/2 -translate-y-1/2 transform bg-[url('/images/process/process-mobile.webp')] bg-contain bg-center bg-no-repeat" />

            {developmentSteps?.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className="absolute"
                style={step.position}
              >
                <div className="relative group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:scale-110">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-white text-sm md:text-base font-semibold tracking-wide">
                      {step.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </section >
  )
}
