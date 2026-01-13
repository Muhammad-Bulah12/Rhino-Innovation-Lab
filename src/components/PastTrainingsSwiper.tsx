"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const pastTrainings = [
  {
    id: 1,
    title: "Web Development Bootcamp 2024",
    date: "January - March 2024",
    participants: 25,
    image: "/past-training-1.png",
    description: "Intensive 8-week bootcamp covering HTML, CSS, JavaScript, and React fundamentals."
  },
  {
    id: 2,
    title: "Data Analysis with Python",
    date: "April - June 2024",
    participants: 20,
    image: "/past-training-2.png",
    description: "Comprehensive workshop on data visualization and analysis using Python, Pandas, and Matplotlib."
  },
  {
    id: 3,
    title: "Digital Entrepreneurship Workshop",
    date: "July - August 2024",
    participants: 30,
    image: "/past-training-3.png",
    description: "Hands-on training on turning tech ideas into viable businesses, covering branding and marketing."
  }
];

export default function PastTrainingsSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pastTrainings.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pastTrainings.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pastTrainings.length) % pastTrainings.length);
    setIsAutoPlaying(false);
  };

  const currentTraining = pastTrainings[currentSlide];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main Image Container */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
        <Image
          src={currentTraining.image}
          alt={currentTraining.title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay with Training Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
            {currentTraining.title}
          </h3>
          <p className="text-gray-200 text-sm md:text-base mb-2">
            {currentTraining.description}
          </p>
          <div className="flex items-center gap-4 text-gray-300 text-sm">
            <span>📅 {currentTraining.date}</span>
            <span>👥 {currentTraining.participants} Participants</span>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {pastTrainings.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-gray-300 w-2 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
