"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const WorkDetailBgImage = ({ images, title }: { title: string; images: string[] }) => {

  return (
    <div className="container mx-auto px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full h-[80vh] md:h-screen overflow-hidden rounded-none"
      >
        <Image
          src={`https://api.hnhtechsolutions.com${images[0]}`}
          alt="Project background image"
          fill
          priority
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 z-10 bg-black/60" />
        <div className="absolute bottom-10 left-10 z-20 text-white">
          <h2 className="text-4xl md:text-6xl font-bold drop-shadow-xl">{title}</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkDetailBgImage;

