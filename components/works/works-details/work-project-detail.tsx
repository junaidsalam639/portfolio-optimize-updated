import { Card, CardContent } from '@/components/ui/card'
import { ProjectType } from '@/types/project-type'
import { motion } from "framer-motion"

type WorkDetailProps = {
    project: ProjectType;
};

const WorkProjectDetail = ({ project }: WorkDetailProps) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <div className="w-1 h-6 bg-[#e6003f] mr-3"></div>
                            Project Details
                        </h3>
                        <div className="space-y-4">
                            {project?.ProjectDetail?.map((detail, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                                >
                                    <span className="text-gray-600 font-medium">{detail.title}:</span>
                                    <span className="text-gray-900 font-semibold">{detail.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    )
}

export default WorkProjectDetail

