"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import HeroCarousel from "./crousial";
import FeaturesSection from "./Spical";

import TrendingProducts from "./Tranding";
import WhyChooseUs from "./Choose";
import CustomerTestimonials from "./costumer";
import UpcomingMedicalProducts from "./Upcoming";
// app/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vultamin Gold | Vultus Life Sciences",
  description:
    "Explore Vultamin Gold, Omega-3, Multivitamins, Vullax, and Lactulose Solution by Vultus Life Sciences. Your trusted health companion.",
  keywords: [
    "Vultamin-gold",
    "Vultus life sciences",
    "Omega-3",
    "Multivitamins",
    "Vullax",
    "Lactulose solution",
  ],
  openGraph: {
    title: "Vultamin Gold | Vultus Life Sciences",
    description:
      "Buy premium supplements including Omega-3, Multivitamins, and more. Trusted by thousands worldwide.",
    url: "https://yourdomain.com", // ✅ Replace with your domain
    siteName: "Vultus Life Sciences",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Vultamin Gold and other supplements",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
          <UpcomingMedicalProducts />
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
