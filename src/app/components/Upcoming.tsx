"use client";
import Image from "next/image";
import { CalendarIcon, ArrowRightIcon } from "lucide-react";

export default function UpcomingMedicalProducts() {
  // Sample upcoming medical product data
  const upcomingProducts = [
    {
      id: 1,
      name: "Advanced Glucose Monitor",
      description:
        "Next-generation glucose monitoring with continuous tracking and smartphone integration.",
      image: "/placeholder.svg?height=300&width=300",
      releaseDate: "March 15, 2025",
      price: "$199.99",
      category: "Diagnostics",
    },
    {
      id: 2,
      name: "Smart Medication Dispenser",
      description:
        "Automated pill dispenser with reminders, tracking, and caregiver notifications.",
      image: "/placeholder.svg?height=300&width=300",
      releaseDate: "April 22, 2025",
      price: "$129.99",
      category: "Patient Care",
    },
    {
      id: 3,
      name: "Portable ECG Monitor",
      description:
        "Clinical-grade ECG monitoring in a compact, easy-to-use device for home and travel use.",
      image: "/placeholder.svg?height=300&width=300",
      releaseDate: "Coming Soon",
      price: "$249.99",
      category: "Cardiology",
    },
    {
      id: 4,
      name: "Digital Stethoscope Pro",
      description:
        "Enhanced auscultation with noise cancellation and recording capabilities for medical professionals.",
      image: "/placeholder.svg?height=300&width=300",
      releaseDate: "May 10, 2025",
      price: "$179.99",
      category: "Medical Tools",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Upcoming Medical Products
            </h2>
            <p className="text-gray-500 mt-2">
              Discover our latest innovations in healthcare
            </p>
          </div>
          <button className="mt-4 md:mt-0 group flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View all upcoming
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mt-2 mb-3">
                  {product.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <span>{product.releaseDate}</span>
                </div>
              </div>
              <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                <button className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
