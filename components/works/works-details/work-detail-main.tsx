"use client";

import { useQuery } from "@apollo/client";
import { GETBYID } from "@/queries/get-projects";
import WorkDetailBgImage from "./work-detail-bg-image";
import WorkProjectDetail from "./work-project-detail";
import WorkStats from "./work-stats";
import WorkDemoLink from "./work-demo-link";
import WorkDetailLeftTabs from "./work-detail-left-tabs";

const WorkDetailMain = ({ id }: { id: string }) => {
    const { data, loading, error } = useQuery(GETBYID, {
        variables: {
            projectId: Number(id),
        },
    });

    const project = data?.projectById || {};

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#E91E63]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Oops! Something went wrong.</h2>
                <p className="text-gray-600 mb-2">We were unable to load the project details at this time.</p>
                <p className="text-sm text-gray-400">Error: {error.message}</p>
            </div>
        );
    }

    return (
        <>
            <WorkDetailBgImage images={project?.images} title={project?.title} />

            <div className="min-h-screen pt-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <WorkDetailLeftTabs project={project} />
                            </div>
                            <div className="lg:col-span-1 space-y-8">
                                <WorkProjectDetail project={project} />
                                <WorkStats project={project} />
                                <WorkDemoLink project={project} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkDetailMain;
