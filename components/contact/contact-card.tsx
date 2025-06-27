"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"


const ContactCard = () => {
    return (
        <>
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="text-center p-8 h-full">
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-[#ff0049] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black mb-2">Mail Here</h3>
                                    <a
                                        href="mailto:info@creativewebsolutions.com"
                                        className="text-[#ff0049] hover:underline"
                                        aria-label="Send an email to info@creativewebsolutions.com"
                                    >
                                        info@creativewebsolutions.com
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="text-center p-8 h-full">
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-[#ff0049] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black mb-2">Visit Here</h3>
                                    <p className="text-gray-600 text-sm">
                                        UK 167-169 Great Portland Street, London, W1W 5PF
                                        <br />
                                        <br />
                                        US 1172 Northwest highway Dallas TX 75220
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="text-center p-8 h-full">
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-[#ff0049] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Phone className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black mb-2">Call Here</h3>
                                    <p className="text-gray-600 text-sm space-y-2">
                                        <a
                                            href="tel:+442045155008"
                                            className="block text-[#ff0049] hover:underline"
                                            aria-label="Call UK office"
                                        >
                                            UK +44 20 45155008
                                        </a>
                                        <a
                                            href="tel:+19727774163"
                                            className="block mt-2 text-[#ff0049] hover:underline"
                                            aria-label="Call US office"
                                        >
                                            US +972 777-4163
                                        </a>
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactCard

