"use client";
import React from 'react';
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const blogPosts = [
    {
        id: 1,
        title: "The Most Popular New top Business Apps",
        excerpt:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
        date: "FEB 15, 2023",
        category: "Technology",
        image: "/images/blog/blog1.jpg",
        categoryColor: "bg-[#ff0049]",
    },
    {
        id: 2,
        title: "The Best Marketing top use Management Tools",
        excerpt:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
        date: "FEB 16, 2023",
        category: "Agency",
        image: "/images/blog/blog2.jpg",
        categoryColor: "bg-[#ff0049]",
    },
    {
        id: 3,
        title: "3 WooCommerce Plugins to Boost Sales",
        excerpt:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
        date: "FEB 17, 2023",
        category: "IT Agency",
        image: "/images/blog/blog3.jpg",
        categoryColor: "bg-[#ff0049]",
    },
]

const BlogCard = () => {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                                    <div className="relative">
                                        <Image
                                            src={post.image || "/placeholder.svg"}
                                            alt={post.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div
                                            className={`absolute top-4 left-4 ${post.categoryColor} text-white px-3 py-1 text-xs font-medium rounded`}
                                        >
                                            {post.category}
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <p className="text-[#e6003f] text-sm font-medium mb-2">{post.date}</p>
                                        <h3 className="text-xl font-semibold text-black mb-3 line-clamp-2">{post.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                        <Button
                                            variant="link"
                                            className="text-[#e6003f] hover:text-[#b60049] p-0 font-medium"
                                            aria-label={`Read more about ${post.title}`}
                                        >
                                            Read More →
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-300"
                            aria-label="Previous page"
                        >
                            ←
                        </Button>

                        <Button
                            size="sm"
                            className="bg-[#e6003f] hover:bg-[#b60049] text-white"
                            aria-current="page"
                        >
                            1
                        </Button>

                        <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-300"
                            aria-label="Go to page 2"
                        >
                            2
                        </Button>

                        <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-300"
                            aria-label="Next page"
                        >
                            →
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogCard

