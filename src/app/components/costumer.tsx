import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "R N Joshi",
    role: "Customer",
    quote: "Excellent quality. Exactly what I asked for",
  },
  {
    name: "R t Joshi",
    role: "Customer",
    quote: "Excellent quality. Exactly what I asked for",
  },
  {
    name: "R tt Joshi",
    role: "Customer",
    quote: "Excellent quality. Exactly what I asked for",
  },
  {
    name: "R Nfgg Joshi",
    role: "Customer",
    quote: "Excellent quality. Exactly what I asked for",
  },
  // Add more testimonials here if needed
];

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
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">
          What our Customers are <span className="text-orange-500">Saying</span>
        </h2>
        <div className="mt-6 bg-white p-8 shadow-lg rounded-md relative">
          <p className="text-gray-600">{testimonials[index].quote}</p>
          <h3 className="mt-4 font-bold text-lg text-black">
            {testimonials[index].name}
          </h3>
          <p className="text-sm text-gray-500">{testimonials[index].role}</p>
          <div className="absolute top-2 right-6 text-green-500 text-3xl">
            “
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 border rounded-md text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 border rounded-md text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Brands Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-green-600">—</span> Our{" "}
          <span className="text-orange-500">Brands</span>{" "}
          <span className="text-green-600">—</span>
        </h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="p-6 border shadow-md rounded-md w-48">
            <img src="/tyteen-logo.png" alt="TYTEEN" className="mx-auto" />
            <h3 className="mt-4 font-bold text-lg">TYTEEN</h3>
          </div>
          <div className="p-6 border shadow-md rounded-md w-48">
            <img
              src="/pratheen-logo.png"
              alt="PRATHEEN"
              className="mx-auto opacity-50"
            />
            <h3 className="mt-4 font-bold text-lg">PRATHEEN</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
