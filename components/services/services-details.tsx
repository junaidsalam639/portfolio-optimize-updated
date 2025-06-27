"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { services_data } from "@/data/service-data"

export default function ServicesDetails({ id }: { id: string }) {
    const service = services_data?.find((s) => s.id === id)

    if (!service) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl text-gray-500">Service not found.</p>
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto px-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[80vh] md:h-screen overflow-hidden rounded-none"
                >
                    <Image
                        src={service.image || "/placeholder.svg?height=400&width=800"}
                        alt={service.title || "Service image"}
                        fill
                        priority
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute bottom-10 left-10 z-20 text-white">
                        <h2 className="text-4xl md:text-6xl font-bold">{service.title}</h2>
                    </div>
                </motion.div>
            </div>
            <div className="container mx-auto p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <Card className="h-full border-0 shadow-lg">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                                    <div className="w-1 h-8 bg-[#E91E63] mr-4"></div>
                                    Service Description
                                </h2>
                                <div
                                    className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: service.description }}
                                />
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-0 shadow-lg bg-gray-50">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                                    <div className="w-1 h-8 bg-[#E91E63] mr-4"></div>
                                    Our Working Process
                                </h2>
                                <div className="text-gray-600 space-y-3" dangerouslySetInnerHTML={{ __html: service.workProcess }} />
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

