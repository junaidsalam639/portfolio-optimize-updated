import MorqueeSection from "@/components/morquee-section"
import WorkLegos from "./work-legos"
import WorkProjects from "./work-projects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"


const WorksTabs = () => {
    return (
        <>
            <section className="py-20 bg-white">
                <MorqueeSection title="OUR WORKS" />
                <div className="container mx-auto px-4">
                    <div className="text-center my-12">
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our diverse portfolio of projects, each showcasing our commitment to excellence and delivering
                            tailored solutions that drive success.
                        </p>
                    </div>

                    <Tabs defaultValue="logos" className="w-full">
                        <TabsList className="flex justify-center mb-12 w-64 items-center mx-auto">
                            <TabsTrigger
                                value="logos"
                                className="px-6 py-3 w-36 font-medium data-[state=active]:text-[#E91E63] data-[state=active]:border-b-2 border-[#E91E63] text-gray-600 hover:text-[#E91E63] transition"
                            >
                                Logos
                            </TabsTrigger>
                            <TabsTrigger
                                value="applications"
                                className="px-6 py-3 w-36 font-medium data-[state=active]:text-[#E91E63] data-[state=active]:border-b-2 border-[#E91E63] text-gray-600 hover:text-[#E91E63] transition"
                            >
                                Applications
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="logos">
                            <WorkLegos />
                        </TabsContent>
                        <TabsContent value="applications">
                            <WorkProjects />
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default WorksTabs

