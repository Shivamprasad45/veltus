"use client";
import Image from "next/image";
import { CalendarIcon, ArrowRightIcon, HeartIcon } from "lucide-react";

export default function UpcomingMedicalProducts() {
  const upcomingProducts = [
    {
      id: 3,
      name: "UltraPure Whey Protein Isolate",
      description:
        "Pharma-grade 90% pure whey protein with enhanced absorption technology for muscle recovery and immune support. Lactose-free formula with instant mixing technology.",
      image:
        "https://res.cloudinary.com/dn633knvv/image/upload/v1741065982/a-3d-rendering-of-a-high-quality-protein_fLEu7cOZQKGnRCmf8mG42w_JPwaOni7Rp-lGQquJIKfDg_erb0hc.jpg",
      releaseDate: "June 10, 2025",
      price: "$49.99",
      category: "Nutrition",
      flavors: ["Vanilla", "Chocolate", "Strawberry"],
      rating: 4.8,
    },
    {
      id: 4,
      name: "Complete Multivitamin Elixir",
      description:
        "Full-spectrum vitamin syrup with 25 essential nutrients using nano-encapsulation for better bioavailability. Sugar-free formulation with natural fruit flavors.",
      image:
        "https://res.cloudinary.com/dn633knvv/image/upload/v1741066104/a-photo-of-a-premium-multivitamin-syrup-_749pDm6-QvK4_yBKTmfMyg_vRG-QCg_QWKQdR34b42c2A_wf9uj5.jpg",
      releaseDate: "July 5, 2025",
      price: "$29.99",
      category: "Wellness",
      ageGroup: "All Ages",
      rating: 4.9,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Upcoming Health Innovations
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl">
              Discover our next-generation wellness solutions designed for
              optimal health performance
            </p>
          </div>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors group">
            <span className="font-semibold">Explore All Innovations</span>
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {upcomingProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100"
            >
              <div className="absolute top-4 right-4 z-10">
                <button className="p-2 rounded-full bg-white/90 shadow-sm hover:bg-gray-50 transition-colors">
                  <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={450}
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  {product.ageGroup && (
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                      {product.ageGroup}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 pr-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    ⭐ {product.rating}
                  </div>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-gray-500">
                    <CalendarIcon className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="font-medium">{product.releaseDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
