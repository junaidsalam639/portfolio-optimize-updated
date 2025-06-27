"use client";
import { motion } from "framer-motion"
import Image from "next/image";

const WORKLOGOS = [
    "/images/web-logos/logo1.png",
    "/images/web-logos/logo2.png",
    "/images/web-logos/logo3.png",
    "/images/web-logos/logo4.png",
    "/images/web-logos/logo5.png",
    "/images/web-logos/logo6.png",
    "/images/web-logos/logo7.png",
    "/images/web-logos/logo8.png",
    "/images/web-logos/logo9.png",
    "/images/web-logos/logo10.png",
    "/images/web-logos/logo11.png",
    "/images/web-logos/logo12.png",
    "/images/web-logos/logo13.png",
    "/images/web-logos/logo14.png",
    "/images/web-logos/logo15.png",
    "/images/web-logos/logo16.png",
    "/images/web-logos/logo17.png",
    "/images/web-logos/logo18.png",
    "/images/web-logos/logo19.jpg",
    "/images/web-logos/logo20.jpg",
    "/images/web-logos/logo21.jpg",
    "/images/web-logos/logo22.jpg",
    "/images/web-logos/logo23.jpg",
    "/images/web-logos/logo24.jpg",
    "/images/web-logos/logo25.jpg",
    "/images/web-logos/logo26.jpg",
    "/images/web-logos/logo27.jpg",
    "/images/web-logos/logo28.jpg",
    "/images/web-logos/logo29.jpg",
    "/images/web-logos/logo30.jpg",
    "/images/web-logos/logo31.jpg",
    "/images/web-logos/logo32.jpg",
    "/images/web-logos/logo33.jpg",
    "/images/web-logos/logo34.jpg",
    "/images/web-logos/logo35.jpg",
];

const WorkLegos = () => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {WORKLOGOS?.map((logo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border"
                    >
                        <Image
                            src={logo}
                            alt="Logo"
                            width={120}
                            height={80}
                            className="max-w-full h-auto"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default WorkLegos

