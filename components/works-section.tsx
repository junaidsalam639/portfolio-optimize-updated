"use client"
import { ReactNode } from "react"
import Link from "next/link"
import MorqueeSection from "./morquee-section";

const projects = [
  {
    title: "FACTORY",
    image: "/images/portfolio/1.webp",
    color: "bg-gradient-to-br from-red-500 to-pink-500",
    category: "Manufacturing",
    viewDetails: new URL("/factory", "https://example.com"),
  },
  {
    title: "VIRTUAL TRACK",
    image: "/images/portfolio/2.webp",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    category: "Technology",
    viewDetails: new URL("/virtual-track", "https://example.com"),
  },
  {
    title: "SARGAL TV",
    image: "/images/portfolio/3.webp",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    category: "Media",
    viewDetails: new URL("/sargal-tv", "https://example.com"),
  },
  {
    title: "DO DELIVER",
    image: "/images/portfolio/4.webp",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    category: "Logistics",
    viewDetails: new URL("/do-deliver", "https://example.com"),
  },
  {
    title: "PREMIUM ID",
    image: "/images/portfolio/5.webp",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    category: "Identity",
    viewDetails: new URL("/premium-id", "https://example.com"),
  },
  {
    title: "INDUSTREE",
    image: "/images/portfolio/6.webp",
    color: "bg-gradient-to-br from-indigo-500 to-purple-500",
    category: "Agriculture",
    viewDetails: new URL("/industree", "https://example.com"),
  },
  {
    title: "SALES TEAM",
    image: "/images/portfolio/7.webp",
    color: "bg-gradient-to-br from-teal-500 to-blue-500",
    category: "Sales",
    viewDetails: new URL("/sales-team", "https://example.com"),
  },
]

interface CardProps {
  data: {
    category: ReactNode
    viewDetails: URL
    title: string;
    image: string;
    color: string;
  };
  i: number;
}

const Card = ({ data, i }: CardProps) => {
  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <div
        className="relative w-full max-w-5xl h-[500px] rounded-3xl bg-cover bg-center bg-no-repeat shadow-lg transition-transform duration-500"
        style={{ backgroundImage: `url(${data.image})`, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="bg-black/50 rounded-3xl w-full h-full flex flex-col items-start justify-between p-8 text-white">
          <div className="mt-12 ml-12">
            <span className="text-lg uppercase text-white font-semibold tracking-wide">
              <Link href={data.viewDetails}>{data.category}</Link>
            </span>
            <h3
              className="md:text-6xl font-bold mt-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #ff0049, #b60049)',
              }}
            >
              <Link href={data.viewDetails}>{data.title}</Link>
            </h3>
          </div>
          <div className="w-full text-center">
            <Link
              href={data.viewDetails}
              className="inline-block mt-6 px-6 py-2 bg-[#e6003f] hover:bg-[#b60049] text-white font-medium rounded-full transition w-full text-center shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="View Case Study"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorksSection = () => {

  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <MorqueeSection title="OUR WORKS" />
          <p className="my-4 max-w-2xl mx-auto text-gray-600">
            Unlock the door to unparalleled dedication and expertise – witness the transformative power of our innovative solutions crafted to fuel triumph for our clients.
          </p>
        </div>

        {projects.map((project, i) => (
          <Card key={`project_${i}`} data={project} i={i} />
        ))}
      </div>
    </section>
  );
};

