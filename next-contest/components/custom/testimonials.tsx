"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";

export default function Testimonials(): React.JSX.Element {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const testimonialData = [
    {
      initial: "A",
      name: "Alex Chen",
      title: "CodeForces Expert (1800+)",
      quote:
        "Before CodeCalendar, I used to miss contests all the time. Now I'm always prepared and have improved my rating significantly. The platform-specific reminders are a game-changer!",
      since: "January 2023",
    },
    {
      initial: "S",
      name: "Sarah Mitchell",
      title: "LeetCode 300+ Problems",
      quote:
        "As someone preparing for technical interviews, the ability to track all LeetCode contests in one place has been invaluable. I love the email reminders that ensure I never miss a weekly contest.",
      since: "March 2023",
    },
    {
      initial: "R",
      name: "Raj Patel",
      title: "CodeChef 5★ Coder",
      quote:
        "The integration with Google Calendar is perfect! I can plan my week around upcoming contests. The platform statistics are also helpful to see which sites are hosting the most competitions.",
      since: "November 2022",
    },
    {
      initial: "M",
      name: "Maria Rodriguez",
      title: "CompetitiveCoding Team Lead",
      quote:
        "I use CodeCalendar to coordinate our university's competitive programming team. It lets us find contests across platforms and schedule team practice sessions efficiently. A must-have tool!",
      since: "February 2023",
    },
  ];

  const statsData = [
    {
      number: "50+",
      title: "Active Users",
      description: "Coders using our platform to track coding contests",
    },
    {
      number: "98%",
      title: "Satisfaction",
      description: "Users who recommend our platform to friends",
    },
    {
      number: "3+",
      title: "Platforms",
      description: "Competitive coding sites integrated and tracked",
    },
  ];

  const totalSlides = testimonialData.length;

  useEffect(() => {
    if (sliderRef.current) {
      scrollToSlide(activeSlide);
    }
  }, [activeSlide]);

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth =
        sliderRef.current.clientWidth / (window.innerWidth >= 1024 ? 3 : 1);
      sliderRef.current.style.transform = `translateX(-${
        index * slideWidth
      }px)`;
    }
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-keppel-100 to-keppel-500 mb-6 py-2">
            What Our Users Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how CodeCalendar has helped programmers around the world
            stay on top of their competitive coding game.
          </p>
        </div>

        <div className="relative group">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
            >
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-neutral-900 to-keppel-950/30 rounded-xl p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-keppel-600 flex items-center justify-center text-white font-bold text-xl">
                          {testimonial.initial}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(4)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-300 italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </div>
                    <div className="text-keppel-400 text-sm font-medium">
                      User since {testimonial.since}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -ml-4 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center focus:outline-none shadow-lg z-10 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -mr-4 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center focus:outline-none shadow-lg z-10 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {[...Array((testimonialData.length % 3) + 1)].map((_, index) => (
                <Button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeSlide === index
                      ? "bg-keppel-600"
                      : "bg-neutral-600 hover:bg-keppel-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-neutral-900/45 backdrop-blur-md border border-keppel-950 rounded-xl p-8"
            >
              <div className="absolute inset-0 top-10 left-20 w-32 h-20  bg-keppel-600/50 rounded-full blur-3xl"></div>
              <div className="text-4xl font-bold text-keppel-500 mb-3">
                {stat.number}
              </div>
              <div className="text-white text-lg font-medium mb-2">
                {stat.title}
              </div>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center bg-keppel-600 hover:bg-keppel-700 text-white font-medium px-8 py-3 rounded-xl transition duration-300"
          >
            Join Thousands of Happy Users
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
