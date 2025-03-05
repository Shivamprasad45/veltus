import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "This product is truly amazing! I use it every day.",
    name: "Rahul Sharma",
  },
  {
    quote: "I absolutely love it! The quality is outstanding.",
    name: "Priya Verma",
  },
  {
    quote: "It has been really useful for me. Definitely recommended!",
    name: "Amit Patel",
  },
  {
    quote: "Such a great experience! I would buy it again.",
    name: "Sneha Iyer",
  },
];
// keep your existing testimonials array

export default function CustomerTestimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What our Customers are{" "}
            <span className="text-orange-500">Saying</span>
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 bg-white p-8 shadow-lg rounded-xl relative max-w-2xl mx-auto"
            >
              <div className="absolute top-4 right-6 text-green-500 text-5xl font-serif">
                “
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {testimonials[index].quote}
              </p>
              <div className="mt-6">
                <h3 className="font-bold text-lg text-black">
                  {testimonials[index].name}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center space-x-4 relative">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Brands Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-green-600">—</span> Our{" "}
            <span className="text-orange-500">Brands</span>{" "}
            <span className="text-green-600">—</span>
          </h2>
          <div className=" justify-center">
            {[1].map((brandId) => (
              <motion.div
                key={brandId}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-24 w-full">
                  <Image
                    src={`https://res.cloudinary.com/dn633knvv/image/upload/v1740835035/logo-${brandId}-Photoroom_j81u7m.png`}
                    alt="Brand logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
