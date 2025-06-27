"use client";

import { Star, Phone, Quote } from "lucide-react";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: "testimonial-1",
    text: "Empowering businesses with innovative web solutions. Custom designs, responsive layouts, and seamless user experiences. Let's elevate your online presence!",
    name: "John Smith",
    role: "CEO at TechCorp",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    id: "testimonial-2",
    text: "Revolutionary approach to digital transformation. Their expertise in modern web technologies helped us achieve unprecedented growth and user engagement.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    id: "testimonial-3",
    text: "Outstanding results that exceeded all expectations. Professional team, cutting-edge solutions, and seamless project delivery from start to finish.",
    name: "Michael Chen",
    role: "Founder & CTO",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
];

const Testimonial = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className="relative bg-black text-white md:py-20 flex items-center justify-center overflow-hidden">
      <div className="container px-6 md:px-12">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#ff0049] to-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:scale-110">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <blockquote className="text-2xl md:text-4x font-light leading-relaxed mb-10 px-4">
                    <span className="text-[#ff0049] text-3xl leading-none">&ldquo;</span>
                    <span className="italic text-white/90">
                      {testimonial.text}
                    </span>
                    <span className="text-[#ff0049] text-3xl leading-none"> &rdquo;</span>
                  </blockquote>

                  <h3 className="text-2xl font-medium text-white mb-2">
                    {testimonial.name}
                  </h3>

                  <p className="text-lg text-white/60 mb-8">
                    {testimonial.role}
                  </p>

                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-[#ff0049] stroke-[#ff0049]"
                      />
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center items-center gap-3">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="p-0 h-auto hover:bg-transparent"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                    ? "bg-gradient-to-r from-[#ff0049] to-red-500 shadow-lg shadow-[#ff0049]/30"
                    : "bg-white/30 hover:bg-white/50"
                  }`}
              />
            </Button>
          ))}
        </div>
      </div>

    </section>
  );
};

export { Testimonial };

