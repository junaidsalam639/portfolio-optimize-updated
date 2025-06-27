"use client";
import { motion } from "framer-motion";

export default function PageBanner({ title }: { title: string }) {
    return (
        <section
            className="relative flex justify-center items-center h-96 text-center text-white"
            style={{
                backgroundImage: `url('/images/bg-banner.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 container mx-auto px-4">
                <motion.h1
                    className="text-4xl lg:text-6xl font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {title}
                </motion.h1>
            </div>
        </section>
    );
}
