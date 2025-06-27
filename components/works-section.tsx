"use client";
import { useQuery } from "@apollo/client";
import MorqueeSection from "./morquee-section";
import { GETALLPROJECT } from "@/queries/get-projects";
import WorkScrollCard from "./works/work-scroll-card";

const HIGHLIGHTED_TITLES = [
  "FACTORY",
  "VIRTUAL TRACK",
  "SARGAL TV",
  "DO DELIVER",
  "PREMIUM ID",
  "INDUSTREE",
  "SALES TEAM",
];

export const WorksSection = () => {
  const { data, loading, error } = useQuery(GETALLPROJECT);
  const allProjects = data?.allProjects || [];
  const filterProjects = allProjects?.filter((project: any) =>
    HIGHLIGHTED_TITLES?.includes(project.title?.toUpperCase()));

  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <MorqueeSection title="OUR WORKS" />
          <p className="my-4 max-w-2xl mx-auto text-gray-600">
            Unlock the door to unparalleled dedication and expertise – witness the transformative
            power of our innovative solutions crafted to fuel triumph for our clients.
          </p>
        </div>
        {error && (
          <div className="text-center text-red-600 text-lg mt-8">
            Something went wrong while fetching projects: {error.message}
          </div>
        )}
        {loading ? (
          <div className="space-y-12">
            {[...Array(3)].map((_, i) => (
              <div
                key={`skeleton_${i}`}
                className="sticky top-0 h-screen flex items-center justify-center"
              >
                <div className="relative w-full max-w-5xl h-[500px] rounded-3xl overflow-hidden bg-gray-300 animate-pulse shadow-lg">
                  <div className="w-full h-full flex flex-col items-start justify-between p-8">
                    <div className="mt-12 ml-12 space-y-4">
                      <div className="w-32 h-4 bg-gray-400 rounded" />
                      <div className="w-64 h-10 bg-gray-400 rounded" />
                    </div>
                    <div className="w-full px-8 pb-8">
                      <div className="w-full h-10 bg-gray-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          filterProjects?.length > 0 && (
            <>
              {filterProjects.map((project: any, i: number) => (
                <WorkScrollCard key={`project_${project.id}`} project={project} i={i} />
              ))}
            </>
          )
        )}
      </div>
    </section>
  );
};


