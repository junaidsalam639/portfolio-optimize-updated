"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { PhoneCall } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

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
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center bg-black overflow-hidden px-4 md:px-12">
      {/* Optimized Video Background with fallback */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/home/video-poster.webp"
          onLoadedData={() => setVideoLoaded(true)}
          aria-hidden="true"
        >
          <source src="/images/home/bg-video.webm" type="video/webm" />
          <source src="/images/home/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback image for when video isn't loaded yet */}
        {!videoLoaded && (
          <Image
            src="/images/home/video-poster.webp"
            alt=""
            fill
            className="object-cover"
            priority
            quality={85}
          />
        )}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="will-change-transform"
        >
          {/* Main heading with optimized animations */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            style={{ willChange: 'opacity', backfaceVisibility: 'hidden' }}
          >
            TOP-TIER{" "}
            <span
              className="inline-block align-middle relative w-[18ch] h-[1.2em] overflow-hidden text-[#E91E63]"
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={texts[index]}
                  className="absolute left-0 right-0 will-change-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            ON TIME, ON BUDGET, ON-POINT.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            style={{ willChange: 'opacity' }}
          >
            Recruit highly skilled developers and designers to enhance your team's capabilities.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e6003f] hover:bg-[#b60049] text-white rounded-full px-8 py-3 font-semibold flex items-center justify-center gap-3 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 will-change-transform"
            aria-label="Get in touch via phone"
            onClick={() => router.push("/contact")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          >
            <PhoneCall size={20} aria-hidden="true" />
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}