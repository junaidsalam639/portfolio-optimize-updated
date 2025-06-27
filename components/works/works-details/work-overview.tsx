import { Card, CardContent } from '@/components/ui/card'
import { ProjectType } from '@/types/project-type'
import { Star, Users } from 'lucide-react'
import { motion } from "framer-motion"

type WorkDetailProps = {
    project: ProjectType;
};

const WorkOverview = ({ project }: WorkDetailProps) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">{project?.description}</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#e6003f] rounded-full flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-[#e6003f]">Target Audience</h4>
                                </div>
                                <Card className="bg-gray-50 border border-gray-200 hover:border-[#E91E63]/30 transition-colors duration-300">
                                    <CardContent className="p-6">
                                        <p className="text-gray-700">{project?.targetAudience}</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#e6003f] rounded-full flex items-center justify-center">
                                        <Star className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-[#e6003f]">Key Features</h4>
                                </div>
                                <Card className="bg-gray-50 border border-gray-200 hover:border-[#E91E63]/30 transition-colors duration-300">
                                    <CardContent className="p-6">
                                        <ul className="space-y-3">
                                            {project?.keyFeatures?.map((feature, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center gap-3 text-gray-700"
                                                >
                                                    <div className="w-2 h-2 bg-[#e6003f] rounded-full"></div>
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    )
}

export default WorkOverview
