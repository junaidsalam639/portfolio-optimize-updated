"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function GoToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        function onScroll() {
            setVisible(window.pageYOffset > 100)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    aria-label="Go to top"
                    className={cn(
                        "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#e6003f] hover:bg-[#b60049] text-white shadow-lg cursor-pointer",
                        "focus:outline-none focus:ring-2 focus:ring-pink-400"
                    )}
                >
                    <ChevronUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
