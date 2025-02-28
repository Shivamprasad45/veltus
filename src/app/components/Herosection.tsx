import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white to-green-50 container sm:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/background-pattern.png')] bg-cover opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container relative z-10 flex flex-col items-center justify-center h-screen px-4 mx-auto md:px-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Content */}
        <div className="max-w-2xl text-center lg:text-left lg:max-w-xl">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-full">
            Experience the Benefits of Protein with Manuel Therapeutics
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            The Leading <span className="text-green-600">Manufacturer</span> of{" "}
            <br className="hidden md:block" />
            Dietary Supplements
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Premium quality supplements designed to enhance your health and
            wellness journey.
          </p>

          <div className="mt-8">
            <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-all bg-green-600 rounded-full shadow-lg hover:bg-green-700 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 group">
              About Us
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative mt-10 lg:mt-0">
          <div className="absolute inset-0 -z-10 bg-green-100 rounded-full blur-3xl opacity-30 scale-150"></div>
          <div className="relative transform transition-transform hover:scale-105 duration-500">
            <Image
              src="https://manuel.co.in/wp-content/uploads/2023/10/pratheen-removebg-preview.png"
              alt="Dietary Supplement Product"
              width={600}
              height={400}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-500 to-green-200"></div>
    </section>
  );
}
