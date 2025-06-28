"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { PhoneCall } from "lucide-react"
import { useRouter } from "next/navigation"

const texts = [
  "APP DEVELOPMENT",
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "TEAM AUGMENTATION",
  "SOFTWARE SOLUTIONS",
]

export function HeroSection() {
  const router = useRouter()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center bg-black overflow-hidden px-4 md:px-12">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/placeholder.svg?height=400&width=800" 
      >
        <source src="/images/home/bg-video.mp4" type="video/mp4" />
        <track
          kind="captions"
          src="/images/home/bg-video.mp4"
          srcLang="en"
          label="English"
          default
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            TOP-TIER{" "}
            <span
              className="inline-block align-middle relative w-[18ch] h-[1.2em] overflow-hidden text-[#E91E63]"
              aria-live="polite"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={texts[index]}
                  className="absolute left-0 right-0"
                  initial={index === 0 ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            ON TIME, ON BUDGET, ON-POINT.
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Recruit highly skilled developers and designers to enhance your team's capabilities.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e6003f] hover:bg-[#b60049] text-white rounded-full px-8 py-3 font-semibold flex items-center justify-center gap-3 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label="Get in touch via phone"
            onClick={() => router.push("/contact")}
          >
            <PhoneCall size={20} aria-hidden="true" />
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
