"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"


export function WorkCarousel({ images, title }: { title: string; images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageArray = images[0]?.split(",") || [];

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % imageArray?.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + imageArray?.length) % imageArray?.length)
    }

    if (imageArray?.length === 0) {
        return (
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">No images available</span>
            </div>
        )
    }

    return (
        <div className="relative aspect-video bg-white overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={`https://api.hnhtechsolutions.com${imageArray[currentIndex]}` || "/placeholder.svg?height=400&width=800"}
                        alt={`${title} - Image ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {imageArray?.length > 1 && (
                <>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 shadow-lg backdrop-blur-sm"
                        onClick={prevImage}
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 shadow-lg backdrop-blur-sm"
                        onClick={nextImage}
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </>
            )}

            {imageArray?.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {imageArray?.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#e6003f] scale-110" : "bg-white/60 hover:bg-white/80"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            )}

            {imageArray?.length > 1 && (
                <div className="absolute top-4 right-4 bg-white/80 text-gray-800 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {currentIndex + 1} / {imageArray?.length}
                </div>
            )}
        </div>
    )
}
