import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import { ProjectType } from '@/types/project-type'
import { motion } from "framer-motion"
import { ExternalLink } from 'lucide-react';

type WorkDetailProps = {
  project: ProjectType;
};

const WorkDemoLink = ({ project }: WorkDetailProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-6 bg-[#e6003f] mr-3"></div>
              Demo Links
            </h3>
            <div className="space-y-3">
              {project?.ProjectDemoLink?.map((link, index) => (
                <Button
                  key={index}
                  asChild
                  className="w-full bg-[#e6003f] hover:bg-[#b60049] text-white rounded-lg flex items-center gap-3 justify-center h-12 transition-all duration-300 hover:scale-105"
                >
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${link.title || `Demo ${index + 1}`} in a new tab`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    {link.title || `Demo ${index + 1}`}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}

export default WorkDemoLink




