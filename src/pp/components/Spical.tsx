import React from "react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute left-16 top-40 opacity-10">
        <Image
          src="/placeholder.svg?height=150&width=150"
          width={150}
          height={150}
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="absolute right-0 bottom-0 opacity-10">
        <Image
          src="/placeholder.svg?height=150&width=150"
          width={150}
          height={150}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#0a0a5e]">Our Special </span>
            <span className="text-[#ff5722]">Features</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our purpose is to build solutions that remove barriers preventing
            people from doing their best work, and this is at the heart.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#fff5f2] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="https://manuel.co.in/wp-content/uploads/2023/10/exce-e1698060062596.png"
                width={120}
                height={120}
                alt="Manufacturing Excellence icon"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Manufacturing Excellence</h3>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#fff5f2] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="https://manuel.co.in/wp-content/uploads/2023/10/Untitled-design-fotor-bg-remover-20231016174243-2-e1698060609493.png"
                width={120}
                height={120}
                alt="Client-Centric Approach icon"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Client-Centric Approach</h3>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#fff5f2] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="https://manuel.co.in/wp-content/uploads/2023/10/quality-main-fotor-bg-remover-202310231782-e1698061270242.png"
                width={120}
                height={120}
                alt="Exceptional Quality Assurance icon"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Exceptional Quality Assurance
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
