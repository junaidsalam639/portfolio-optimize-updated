import { Card, CardContent } from '@/components/ui/card'
import { ProjectType } from '@/types/project-type'
import { motion } from "framer-motion"

type WorkDetailProps = {
    project: ProjectType;
};

const WorkStats = ({ project }: WorkDetailProps) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <div className="w-1 h-6 bg-[#e6003f] mr-3"></div>
                            Project Stats
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {project?.ProjectStat?.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-4 bg-gray-50 rounded-lg hover:bg-[#e6003f]/5 transition-colors duration-300"
                                >
                                    <div className="text-3xl font-bold text-[#e6003f] mb-2">{stat?.value}</div>
                                    <div className="text-gray-600 font-medium">{stat?.title}</div>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    )
}

export default WorkStats

