"use client";
import Image from "next/image";

const AboutUs1 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center h-[70vh]">
        <Image
          src="https://res.cloudinary.com/dn633knvv/image/upload/v1740744420/botle_upscaled-removebg-preview_upscaled_mfrrd5.png" // Replace with your image path
          alt="Tyteen Plus"
          width={400}
          height={200}
          className="object-contain "
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-green-600 text-lg font-semibold mb-2">
          ~ About us ~
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          We believe in working with vision to offer{" "}
          <span className="italic">differentiated range</span> of Nutraceutical
          products
        </h2>
        <p className="text-gray-600 mb-6">
          Established in the year 2016, vultus intends to develop a
          best-in-class range of nutraceuticals to cater to adults, adolescents,
          and children from all these segments of people, with a bigger mission
          to create a healthy generation.
        </p>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-3">
            <span className="text-green-600 text-2xl">🌿</span>
            <div>
              <h4 className="font-semibold">Why Manuel?</h4>
              <p className="text-gray-500 text-sm">
                We re making room for self-care today with a plan.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-orange-600 text-2xl">🤝</span>
            <div>
              <h4 className="font-semibold">Speciality Produce</h4>
              <p className="text-gray-500 text-sm">
                Were making room for self-care today with a plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
