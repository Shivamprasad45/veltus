import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const heroData = {
  sections: [
    {
      badgeText: "Experience the Benefits of Protein with Manuel Therapeutics",
      headingParts: {
        part1: "The Leading ",
        highlight: "Manufacturer",
        part2: "of Dietary Supplements",
      },
      paragraphText:
        "Premium quality supplements designed to enhance your health and wellness journey.",
      button: {
        text: "About Us",
        icon: "ArrowRight",
      },
      image: {
        src: "https://res.cloudinary.com/dn633knvv/image/upload/v1740743449/pixelcut-export_upscaled_zl9ymz.png",
        alt: "Dietary Supplement Product",
        width: 600,
        height: 400,
      },
    },
    {
      badgeText: "New Energy Formula Released",
      headingParts: {
        part1: "Innovative ",
        highlight: "Nutrition Solutions",
        part2: "for Active Lifestyles",
      },
      paragraphText:
        "Scientifically formulated to support your fitness goals and daily performance.",
      button: {
        text: "View Products",
        icon: "ArrowRight",
      },
      image: {
        src: "https://res.cloudinary.com/dn633knvv/image/upload/v1740744420/botle_upscaled-removebg-preview_upscaled_mfrrd5.png",
        alt: "New Energy Supplement",
        width: 200,
        height: 100,
      },
    },
  ],
};

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = heroData.sections.length;

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroData.sections[activeIndex];

  return (
    <div className="container relative z-10 flex flex-col items-center justify-center h-screen px-4 mx-auto md:px-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-4 lg:bottom-12">
        <button
          onClick={handlePrev}
          className="p-3 text-gray-600 bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-transform"
        >
          ←
        </button>

        <div className="flex gap-2 mx-4">
          {heroData.sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-green-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 text-gray-600 bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-transform"
        >
          →
        </button>
      </div>

      {/* Content Section */}
      <div
        className={`max-w-2xl text-center lg:text-left lg:max-w-xl transition-opacity transform ${
          isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
        } duration-500`}
      >
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-full">
          {currentSlide.badgeText}
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          {currentSlide.headingParts.part1}
          <span className="text-green-600">
            {currentSlide.headingParts.highlight}
          </span>
          {currentSlide.headingParts.part2}
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          {currentSlide.paragraphText}
        </p>

        <div className="mt-8">
          <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-all bg-green-600 rounded-full shadow-lg hover:bg-green-700 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 group">
            {currentSlide.button.text}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`relative mt-10 lg:mt-0 transition-opacity transform ${
          isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
        } duration-500`}
      >
        <div className="absolute inset-0 -z-10 bg-green-100 rounded-full blur-3xl opacity-30 scale-150"></div>
        <div className="relative transform transition-transform hover:scale-105 duration-500">
          <Image
            src={currentSlide.image.src}
            alt={currentSlide.image.alt}
            width={currentSlide.image.width}
            height={currentSlide.image.height}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
