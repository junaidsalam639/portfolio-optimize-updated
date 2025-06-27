import { Card, CardContent } from '@/components/ui/card'
import { ProjectType } from '@/types/project-type'
import { Calendar } from 'lucide-react'
import { motion } from "framer-motion"

type WorkDetailProps = {
    project: ProjectType;
};
const WorkTimeLine = ({ project }: WorkDetailProps) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">Project Timeline</h3>
                        <div className="space-y-6">
                            {project?.ProjectTimeline?.map((timeline, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="bg-gray-50 border border-gray-200 hover:border-[#b60049] hover:shadow-md transition-all duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-[#e6003f] rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white font-bold">{index + 1}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Calendar className="w-4 h-4 text-[#e6003f]" />
                                                        <span className="text-sm font-semibold text-[#e6003f]">
                                                            {timeline.duration}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{timeline.title}</h4>
                                                    <p className="text-gray-600">{timeline.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    )
}

export default WorkTimeLine


