"use client";
import React from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Clock, Projector, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AboutStats = () => {
    const router = useRouter();

    const stats = [
        {
            number: "500+",
            label: "Happy Clients",
            icon: <User size={24} />,
        },
        {
            number: "120+",
            label: "Projects Delivered",
            icon: <Projector size={24} />,
        },
        {
            number: "10+",
            label: "Years Experience",
            icon: <Clock size={24} />,
        },
        {
            number: "15",
            label: "Industry Awards",
            icon: <Award size={24} />,
        },
    ];


    return (
        <>
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                            We always try to understand users expectation
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Experience the Creative Web Solutions difference today. Contact us to learn more about our innovative IT
                            services and solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 bg-[#ff0049] text-white rounded-full flex items-center justify-center">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-black mb-2">{stat.number}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center items-center">
                        <div className="bg-white rounded-2xl shadow-md px-8 py-10 max-w-xl w-full
            flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold text-black mb-2">
                                    Have any questions about us?
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Don't hesitate to contact us
                                </p>
                            </div>
                            <Button
                                onClick={() => router.push("/contact")}
                                className="bg-[#e6003f] hover:bg-[#b60049] text-white rounded-full px-8"
                                aria-label="Contact us via contact form"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutStats


