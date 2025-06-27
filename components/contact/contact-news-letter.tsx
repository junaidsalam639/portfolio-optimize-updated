"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";

const ContactNewsLetter = () => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => {
                setIsSubscribed(false);
                setEmail("");
            }, 3000);
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-black via-gray-900 to-slate-900 py-24 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-full px-6 py-2 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-pink-400" />
                        <span className="text-pink-300 text-sm font-semibold tracking-wide uppercase">
                            Get Started Instantly!
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Get the only new update from
                        <br />
                        <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                            this newsletter
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Stay ahead with exclusive insights, cutting-edge updates, and industry secrets delivered straight to your inbox.
                    </motion.p>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="max-w-lg mx-auto"
                    >
                        <div className="relative group">
                            <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 group-hover:shadow-pink-500/20 group-hover:shadow-2xl">
                                <div className="flex-1 relative">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full h-16 px-6 pr-4 bg-transparent text-gray-800 placeholder:text-gray-500 text-lg border-none outline-none focus:outline-none focus:ring-0 focus:border-none"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubscribed}
                                    aria-disabled={isSubscribed}
                                    className="h-12 px-8 m-2 text-white font-semibold rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center gap-2 bg-[#ff0049] hover:bg-[#b60049]"
                                >
                                    <Send className="w-5 h-5" aria-hidden="true" />
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactNewsLetter

