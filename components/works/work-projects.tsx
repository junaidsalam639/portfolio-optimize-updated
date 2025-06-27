"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { Skeleton } from "@/components/ui/skeleton"
import { Eye } from "lucide-react"
import { Badge } from "../ui/badge"
import { useRouter } from "next/navigation"
import { GETDATA } from "@/queries/get-projects"

const WorkProjects = () => {
    const router = useRouter();
    const [skip, setSkip] = useState(0)
    const [projects, setProjects] = useState<any[]>([])
    const limit = 6

    const { data, loading, fetchMore } = useQuery(GETDATA, {
        variables: { skip, limit, categoryId: undefined },
        fetchPolicy: "cache-and-network",
        onCompleted: (data) => {
            if (data?.projects?.data) {
                setProjects((prev) => [...prev, ...data.projects.data])
            }
        },
    })

    const handleLoadMore = () => {
        const newSkip = skip + limit
        setSkip(newSkip)
        fetchMore({
            variables: { skip: newSkip, limit, categoryId: undefined },
        })
    }

    const isLoading = loading && projects?.length === 0

    const renderSkeletons = Array.from({ length: limit }, (_, index) => (
        <div
            key={index}
            className="h-72 rounded-xl overflow-hidden shadow-lg relative bg-gray-200 animate-pulse"
        >
            <Skeleton className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-24 rounded-full bg-[#ff0049]/30" />
                    <Skeleton className="h-6 w-3/4 rounded bg-white/30" />
                </div>
                <Skeleton className="h-10 w-32 rounded-full bg-[#ff0049]/30 mt-4" />
            </div>
        </div>
    ));

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading
                    ? renderSkeletons
                    : projects?.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => router.push(`/works/${project.id}`)}
                        >
                            <Card className="group relative h-72 overflow-hidden rounded-xl shadow-lg">
                                <Image
                                    src={`https://api.hnhtechsolutions.com${project.images[0]}`}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-black/60 z-10" />

                                <CardContent className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
                                    <div>
                                        <Badge>{project.categories?.[0]?.name || "Uncategorized"}</Badge>
                                        <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
                                    </div>

                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button className="bg-[#e6003f] hover:bg-[#b60049] text-white rounded-full px-5 flex items-center gap-2">
                                            <Eye size={16} aria-hidden="true" />
                                            View Details
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
            </div>

            <div className="text-center mt-12">
                <Button
                    disabled={loading}
                    onClick={handleLoadMore}
                    aria-disabled={loading}
                    className="bg-[#ff0049] hover:bg-[#b60049] text-white rounded-full px-8"
                >
                    {loading ? "Loading..." : "Load More"}
                </Button>
            </div>
        </>
    )
}

export default WorkProjects



