import { Card, CardContent } from '@/components/ui/card'
import { ProjectType } from '@/types/project-type'
import { Settings } from 'lucide-react'
import { motion } from "framer-motion"

type WorkDetailProps = {
    project: ProjectType;
};

const WorkTechnologies = ({ project }: WorkDetailProps) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">Technologies Used</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {project?.technologies?.map((tech, index) => (
                                <motion.div
                                    key={tech.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="group"
                                >
                                    <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-[#b60049] hover:shadow-lg transition-all duration-300 cursor-pointer">
                                        <CardContent className="p-6 text-center">
                                            <div className="w-12 h-12 bg-[#e6003f] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                                <Settings className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="font-semibold text-gray-900 group-hover:text-[#b60049] transition-colors duration-300">
                                                {tech.name}
                                            </h4>
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

export default WorkTechnologies


