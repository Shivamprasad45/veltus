"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "./crousial";
import FeaturesSection from "./Spical";
import ManufacturingFacility from "./Manfucring";
import TrendingProducts from "./Tranding";
import WhyChooseUs from "./Choose";
import CustomerTestimonials from "./costumer";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white to-green-50 container sm:px-8">
      {/* Background elements with motion effect */}
      <motion.div
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-cover opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Hero Carousel with fade-in effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HeroCarousel />
      </motion.div>

      {/* Sections with staggered reveal effect */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FeaturesSection />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <ManufacturingFacility />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TrendingProducts />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <WhyChooseUs />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <CustomerTestimonials />
        </motion.div>
      </motion.div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-500 to-green-200"></div>
    </section>
  );
}
