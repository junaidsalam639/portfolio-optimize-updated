// "use client"

// import { useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import { PhoneCall } from "lucide-react"
// import { useRouter } from "next/navigation"

// export function HeroSection() {
//   const router = useRouter()
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % texts.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="relative min-h-screen flex flex-col items-start justify-center bg-black px-4 md:px-12 overflow-hidden">
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         poster="/images/placeholder.svg"
//         preload="auto"
//       >
//         <source src="/images/home/bg-video.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-black/60 z-0" />

//       <h1
//         className="z-10 text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
//         style={{
//           fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
//         }}
//       >
//         TOP-TIER
//         <motion.span
//           key={texts[index]}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.4 }}
//           className="text-[#E91E63]"
//         >
//          {" "} {texts[index]}
//         </motion.span>
//         <br />
//         ON TIME, ON BUDGET, ON-POINT.
//       </h1>

//       <p className="relative z-10 text-xl text-gray-300 mb-8 max-w-3xl">
//         Recruit highly skilled developers and designers to enhance your team's capabilities.
//       </p>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="relative z-10 bg-[#e6003f] hover:bg-[#b60049] text-white rounded-full px-8 py-3 font-semibold flex items-center justify-center gap-3 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
//         onClick={() => router.push("/contact")}
//       >
//         <PhoneCall size={20} />
//         Get In Touch
//       </motion.button>
//     </section>
//   )
// }

// const texts = [
//   "APP DEVELOPMENT",
//   "WEB DEVELOPMENT",
//   "UI/UX DESIGN",
//   "TEAM AUGMENTATION",
//   "SOFTWARE SOLUTIONS",
// ]



"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhoneCall } from "lucide-react"
import { useRouter } from "next/navigation"
import Head from "next/head"

export function HeroSection() {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <link rel="preload" href="/images/home/bg-video.mp4" as="video" />
        <link rel="preload" href="/images/placeholder.svg" as="image" />
      </Head>

      <section className="relative min-h-screen flex flex-col items-start justify-center bg-black px-4 md:px-12 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/placeholder.svg"
          preload="auto"
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          onError={() => {
            setVideoError(true)
            setIsLoaded(true)
          }}
        >
          <source src="/images/home/bg-video.mp4" type="video/mp4" />
        </video>

        <AnimatePresence>
          {!isLoaded && !videoError && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center z-20 bg-black"
            >
              <div className="flex flex-col items-center space-y-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-16 h-16 border-4 border-[#e6003f] border-t-transparent rounded-full"
                />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-lg font-medium"
                >
                  Loading awesome content...
                </motion.p>
                
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 3.5, ease: "linear" }}
                  className="h-1.5 bg-gray-700 rounded-full overflow-hidden max-w-xs"
                >
                  <div className="h-full bg-[#e6003f] origin-left" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {(isLoaded || videoError) && (
          <>
            <div className="absolute inset-0 bg-black/60 z-0" />
            <h1
              className="z-10 text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{
                fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
              }}
            >
              TOP-TIER
              <motion.span
                key={texts[index]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-[#E91E63]"
              >
                {" "}{texts[index]}
              </motion.span>
              <br />
              ON TIME, ON BUDGET, ON-POINT.
            </h1>

            <p className="relative z-10 text-xl text-gray-300 mb-8 max-w-3xl">
              Recruit highly skilled developers and designers to enhance your team's capabilities.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-[#e6003f] hover:bg-[#b60049] text-white rounded-full px-8 py-3 font-semibold flex items-center justify-center gap-3 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              onClick={() => router.push("/contact")}
            >
              <PhoneCall size={20} />
              Get In Touch
            </motion.button>
          </>
        )}
      </section>
    </>
  )
}

const texts = [
  "APP DEVELOPMENT",
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "TEAM AUGMENTATION",
  "SOFTWARE SOLUTIONS",
]