"use client"
import { AnimatePresence, motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Circle, Loader } from "lucide-react"
import { CREATE_CONTACT_MUTATION } from "@/queries/get-projects"
import { useMutation } from "@apollo/client"
import { useState } from "react"

const ContactForm = () => {
    const [createContact, { loading }] = useMutation(CREATE_CONTACT_MUTATION)
    const [status, setStatus] = useState<"success" | "error" | null>(null)

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const values = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            phone: form.phone.value,
            subject: form.subject.value,
            comment: form.comment.value,
            companyName: "Creative Web Solutions",
        }
        try {
            await createContact({ variables: values })
            setStatus("success")
            form.reset()
        } catch (error) {
            console.error("Submission error:", error)
            setStatus("error")
        }
        setTimeout(() => setStatus(null), 5000)
    }

    return (
        <>
            <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center"
                        >
                            Get In
                            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                                {" "} Touch
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed text-center"
                        >
                            Reach out to us today and let start a conversation about how Creative Web Solutions can help your
                            business thrive in the digital age.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-gray-900 border-none shadow-2xl">
                                <CardContent className="p-8">
                                    <form className="space-y-6" onSubmit={handlerSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">First Name</label>
                                                <Input
                                                    name="firstName"
                                                    required
                                                    placeholder="John"
                                                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                                                <Input
                                                    name="lastName"
                                                    required
                                                    placeholder="Doe"
                                                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">Email</label>
                                                <Input
                                                    name="email"
                                                    required
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">Phone</label>
                                                <Input
                                                    name="phone"
                                                    type="number"
                                                    required
                                                    placeholder="+1234567890"
                                                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">Subject</label>
                                            <Input
                                                name="subject"
                                                required
                                                placeholder="I'm interested in..."
                                                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">Message</label>
                                            <Textarea
                                                name="comment"
                                                required
                                                placeholder="Tell us more about your project..."
                                                rows={5}
                                                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <Button
                                                disabled={loading}
                                                type="submit"
                                                className="bg-[#ff0049] hover:bg-[#b60049] text-white px-8 py-3 w-40 rounded-full"
                                                aria-label="Send your message"
                                            >
                                                {loading ?
                                                    <div className="animate-spin">
                                                        <Loader />
                                                    </div> : 'Send Message'}
                                            </Button>
                                        </div>
                                    </form>
                                    <AnimatePresence>
                                        {status === "success" && (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.4 }}
                                                className="mt-6 flex items-center justify-center gap-3 text-green-700 bg-green-100 border border-green-300 px-6 py-4 rounded-lg shadow-md"
                                            >
                                                <Check className="w-6 h-6 text-green-700" />
                                                <span className="text-base font-medium">
                                                    Your message has been sent successfully!
                                                </span>
                                            </motion.div>
                                        )}

                                        {status === "error" && (
                                            <motion.div
                                                key="error"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.4 }}
                                                className="mt-6 flex items-center justify-center gap-3 text-red-700 bg-red-100 border border-red-300 px-6 py-4 rounded-lg shadow-md"
                                            >
                                                <Circle className="w-6 h-6 text-red-700" />
                                                <span className="text-base font-medium">
                                                    Oops! Something went wrong. Try again.
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm


