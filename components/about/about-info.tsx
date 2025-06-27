"use client";
import Image from 'next/image'
import React from 'react'
import MorqueeSection from '../morquee-section'
import { motion } from "framer-motion"

const AboutInfo = () => {
    return (
        <>
            <section className="py-20 bg-white">
                <MorqueeSection title="ABOUT US" />
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/images/about-left.jpg"
                                alt="About Us"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">Technological Innovation:</h3>
                                <p className="text-gray-600">
                                    Innovation is our hallmark. With a relentless commitment to staying ahead of the curve, we harness the
                                    latest advancements in technology to craft solutions that drive real business impact. From AI and
                                    machine learning to blockchain and IoT, we leverage cutting-edge tools and frameworks to deliver
                                    solutions that exceed expectations.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">Tailored Solutions:</h3>
                                <p className="text-gray-600">
                                    We understand that every business is unique. That's why we take a personalized approach to every
                                    project, closely working with you to understand your specific challenges and objectives. Whether
                                    you're seeking to optimize processes, enhance productivity, or capitalize on new opportunities, our
                                    tailored solutions are designed to align with your goals and deliver measurable results.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">Skilled Professionals:</h3>
                                <p className="text-gray-600">
                                    Our greatest asset is our team of highly skilled professionals. With expertise spanning a wide range
                                    of disciplines, including software development, cybersecurity, cloud computing, and digital
                                    transformation, our professionals bring years of experience to bear upon the most complex projects
                                    with confidence and precision.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">Global Reach:</h3>
                                <p className="text-gray-600">
                                    While our headquarters are local, our reach is global. Partnering with Creative Web Solutions means
                                    gaining access to a vast network of resources and expertise spanning continents. Whether you're a
                                    startup looking to make your mark or an established enterprise seeking to accelerate your growth
                                    journey.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">Client-Centric Approach:</h3>
                                <p className="text-gray-600">
                                    At Creative Web Solutions, client satisfaction is our top priority. We take pride in building long-
                                    lasting partnerships founded on trust, transparency, and mutual success. Your goals are our goals, and
                                    we're dedicated to delivering results that exceed your expectations every step of the way.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutInfo



