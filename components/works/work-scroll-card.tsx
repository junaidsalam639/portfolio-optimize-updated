import Link from 'next/link';
import React from 'react'
const WorkScrollCard = ({ project, i }: { project: any; i: number }) => {
    return (
        <>
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div
                    className="relative w-full max-w-5xl h-[500px] rounded-3xl bg-cover bg-center bg-no-repeat shadow-lg transition-transform duration-500"
                    style={{ backgroundImage: `url(https://api.hnhtechsolutions.com${project.images[0]})`, top: `calc(-5vh + ${i * 25}px)` }}>
                    <div className="bg-black/50 rounded-3xl w-full h-full flex flex-col items-start justify-between p-8 text-white">
                        <div className="mt-12 ml-12">
                            <span className="text-lg uppercase font-semibold tracking-wide">
                                <Link href={`/works/${project?.id}`}>
                                    {project?.categories?.[0]?.name || "Category"}
                                </Link>
                            </span>
                            <h3
                                className="md:text-6xl font-bold mt-2 bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(to right, #ff0049, #b60049)" }}
                            >
                                <Link href={`/works/${project?.id}`}>{project?.title}</Link>
                            </h3>
                        </div>
                        <div className="w-full text-center">
                            <Link
                                href={`/works/${project?.id}`}
                                className="inline-block mt-6 px-6 py-2 bg-[#e6003f] hover:bg-[#b60049] text-white font-medium rounded-full transition w-full text-center shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                            >
                                View Case Study
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkScrollCard
