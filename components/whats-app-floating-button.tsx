"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { PhoneCall } from "lucide-react"
import { cn } from "@/lib/utils"
import WhatsapSvg from "./whatsap-svg"

const WHATSAPP_NUMBER = "+447440451891"

export function WhatsAppFloatingButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <a
        href="https://wa.me/447440451891"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <motion.div
          className="fixed top-1/2 right-0 z-50 flex items-center rounded-l-full bg-[#e6003f] shadow-lg cursor-pointer overflow-hidden"
          style={{ transform: "translateY(-50%)" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={false}
          animate={{ width: hovered ? 200 : 56 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          aria-label="WhatsApp contact"
        >
          <motion.div
            className="w-14 h-12 ml-4 flex justify-center items-center rounded-l-full bg-[#e6003f]"
            initial={{ scale: 1 }}
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <WhatsapSvg />
          </motion.div>

          <motion.div
            className={cn(
              "flex items-center px-4 py-2 text-white font-semibold whitespace-nowrap select-none",
              "pointer-events-none"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >

            {WHATSAPP_NUMBER}
          </motion.div>
        </motion.div>
      </a>
    </>
  )
}
