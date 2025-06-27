"use client";
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, FileText, Settings } from "lucide-react"
import { WorkCarousel } from './work-carousel';
import WorkOverview from "./work-overview";
import WorkTechnologies from "./work-technologies";
import WorkTimeLine from "./work-time-line";
import { ProjectType } from "@/types/project-type";

type WorkDetailProps = {
    project: ProjectType;
};

const WorkDetailLeftTabs = ({ project }: WorkDetailProps) => {
    const [activeTab, setActiveTab] = useState("overview");
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-100 border border-gray-200 rounded-2xl p-2 mb-8 h-16">
                        <TabsTrigger
                            value="overview"
                            className="flex items-center gap-3 data-[state=active]:bg-[#e6003f] data-[state=active]:text-white text-gray-600 rounded-xl transition-all duration-300 h-12 text-base font-medium"
                        >
                            <FileText className="w-5 h-5" />
                            Overview
                        </TabsTrigger>
                        <TabsTrigger
                            value="technologies"
                            className="flex items-center gap-3 data-[state=active]:bg-[#e6003f] data-[state=active]:text-white text-gray-600 rounded-xl transition-all duration-300 h-12 text-base font-medium"
                        >
                            <Settings className="w-5 h-5" />
                            Technologies
                        </TabsTrigger>
                        <TabsTrigger
                            value="timeline"
                            className="flex items-center gap-3 data-[state=active]:bg-[#e6003f] data-[state=active]:text-white text-gray-600 rounded-xl transition-all duration-300 h-12 text-base font-medium"
                        >
                            <Calendar className="w-5 h-5" />
                            Timeline
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-8">
                        <WorkOverview project={project} />
                    </TabsContent>
                    <TabsContent value="technologies" className="space-y-8">
                        <WorkTechnologies project={project} />
                    </TabsContent>
                    <TabsContent value="timeline" className="space-y-8">
                        <WorkTimeLine project={project} />
                    </TabsContent>
                </Tabs>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden my-10">
                        <CardContent>
                            <WorkCarousel images={project?.images} title={project?.title} />
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </>
    )
}

export default WorkDetailLeftTabs



