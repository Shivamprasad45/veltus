"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const heroData = {
  sections: [
    {
      id: "slide-1",
      badgeText: "Experience the Benefits of Protein with vultus",
      headingParts: {
        part1: "The Leading ",
        highlight: "Manufacturer",
        part2: " of Multivitmin Supplements",
      },
      paragraphText:
        "Premium quality supplements designed to enhance your health and wellness journey.",
      button: {
        text: "About Us",
        icon: "ArrowRight",
        link: "details/0",
      },
      image: {
        src: "https://res.cloudinary.com/dn633knvv/image/upload/v1740743449/pixelcut-export_upscaled_zl9ymz.png",
        alt: "Dietary Supplement Product",
        width: 600,
        height: 400,
      },
      color: "from-green-50 to-green-100",
      accentColor: "bg-green-600",
    },
    {
      id: "slide-2",
      badgeText: "New Energy Formula Released",
      headingParts: {
        part1: "Innovative ",
        highlight: "Nutrition Solutions",
        part2: " for Active Lifestyles",
      },
      paragraphText:
        "Scientifically formulated to support your fitness goals and daily performance.",
      button: {
        text: "View Products",
        icon: "ArrowRight",
        link: "details/1",
      },
      image: {
        src: "https://res.cloudinary.com/dn633knvv/image/upload/v1740744420/botle_upscaled-removebg-preview_upscaled_mfrrd5.png",
        alt: "New Energy Supplement",
        width: 130,
        height: 150,
      },
      color: "from-emerald-50 to-teal-100",
      accentColor: "bg-emerald-600",
    },
  ],
};

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = heroData.sections.length;
  const autoPlayDuration = 6000; // 6 seconds per slide

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setProgress(0);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 100 / (autoPlayDuration / 100);
      });
    }, 100);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
    resetInterval();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetInterval();
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    resetInterval();
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const currentSlide = heroData.sections[activeIndex];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Background gradient that changes with slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className={`absolute inset-0 bg-gradient-to-br ${currentSlide.color} opacity-70`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-green-200 mix-blend-multiply blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-emerald-200 mix-blend-multiply blur-3xl opacity-30" />

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 mx-auto md:px-6">
        <div className="grid items-center grid-cols-1 gap-12 py-16 lg:grid-cols-2 lg:gap-20">
          {/* Content Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`inline-flex items-center  px-4 py-1.5 mb-6 text-sm font-medium text-white rounded-full ${currentSlide.accentColor}`}
              >
                {currentSlide.badgeText}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
              >
                {currentSlide.headingParts.part1}
                <motion.span
                  initial={{ color: "#047857" }}
                  animate={{ color: "#059669" }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="relative inline-block"
                >
                  {currentSlide.headingParts.highlight}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-1 left-0 h-3 w-full bg-green-200 -z-10 origin-left"
                  />
                </motion.span>
                {currentSlide.headingParts.part2}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 text-lg text-gray-600"
              >
                {currentSlide.paragraphText}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <Link href={currentSlide.button.link} className="group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center px-6 py-3.5 text-base font-medium text-white rounded-full shadow-lg hover:shadow-xl transition-all ${currentSlide.accentColor.replace(
                      "bg-",
                      "bg-"
                    )} hover:brightness-110`}
                  >
                    {currentSlide.button.text}
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      className="ml-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </motion.button>
                </Link>

                <Link href="#learn-more" className="group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-6 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all"
                  >
                    Learn More
                    <motion.span
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Progress bar */}
              <motion.div className="hidden mt-12 lg:block">
                <div className="flex items-center gap-4">
                  <div className="relative w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute inset-y-0 left-0 ${currentSlide.accentColor}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500">
                    {activeIndex + 1}/{totalSlides}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Image Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent rounded-full blur-2xl"
              />

              <motion.div
                whileHover={{ y: -10, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10"
              >
                <Image
                  src={currentSlide.image.src || "/placeholder.svg"}
                  alt={currentSlide.image.alt}
                  width={currentSlide.image.width}
                  height={currentSlide.image.height}
                  className="object-contain drop-shadow-2xl"
                  priority
                />

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -right-4 -top-16 bg-white rounded-full px-3 py-1.5 shadow-lg text-sm font-medium text-green-700 flex items-center gap-1 "
                >
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Premium Quality
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -left-4 bottom-4 bg-white rounded-full px-3 py-1.5 shadow-lg text-sm font-medium text-emerald-700 flex items-center gap-1"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Scientifically Tested
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 lg:bottom-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 text-gray-700 bg-white rounded-full shadow-lg hover:bg-gray-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex gap-3 mx-4">
            {heroData.sections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? currentSlide.accentColor.replace("bg-", "bg-")
                      : "bg-gray-300 group-hover:bg-gray-400"
                  }`}
                />
                {index === activeIndex && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute inset-0 -m-1 rounded-full border-2 border-green-500"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 text-gray-700 bg-white rounded-full shadow-lg hover:bg-gray-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
