import AboutUs1 from "./About1";
import StatsSection from "./aboutmiddle";

export default function AboutUs() {
  return (
    <section className="relative w-full py-16 bg-[#f5f7e8] overflow-hidden">
      {/* Background diagonal shape */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-[#eaedda] transform -skew-x-12 -translate-x-20"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Feature boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* OEM Excellence */}
            <div className="bg-white p-6 rounded-md shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 rounded-full border-2 border-orange-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4V12M16 20V28M8 16H4M28 16H24M12 8L8 4M24 28L20 24M24 4L20 8M8 28L12 24"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">OEM Excellence</h3>
              <p className="text-gray-600">
                Our OEM services extend beyond manufacturing.
              </p>
            </div>

            {/* 100% Original */}
            <div className="bg-white p-6 rounded-md shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 rounded-full border-2 border-orange-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18C17.6569 18 19 16.6569 19 15C19 13.3431 17.6569 12 16 12C14.3431 12 13 13.3431 13 15C13 16.6569 14.3431 18 16 18Z"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 8L13 13M23 23L18 18M23 8L18 13M8 23L13 18"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">100% Original</h3>
              <p className="text-gray-600">
                We guarantee you the sale of Original Brands.
              </p>
            </div>

            {/* Commitment to Quality */}
            <div className="bg-white p-6 rounded-md shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 rounded-full border-2 border-orange-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 14H26C27.1046 14 28 14.8954 28 16V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V16C4 14.8954 4.89543 14 6 14H10"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 18L16 22L22 18"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 4V22"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 8L16 4L22 8"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Commitment to Quality</h3>
              <p className="text-gray-600">
                Quality is at the core of everything we do
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white p-6 rounded-md shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 rounded-full border-2 border-orange-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 15V8C28 6.89543 27.1046 6 26 6H6C4.89543 6 4 6.89543 4 8V24C4 25.1046 4.89543 26 6 26H16"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 29L26 25L22 21"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26 25H18"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 10H28"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 6V10"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6V10"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Quality assurance is our promise of excellence
              </p>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <p className="text-green-600 font-medium text-lg">
                ~ OUR EXISTENCE ~
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                A pure and honest vision to offer Nutraceutical products to
                cater nutrition needs.
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                We envision Manuel Therapeutics to emerge as an acclaimed
                transnational pharmaceutical company delivering high quality,
                innovative yet affordable branded generic formulations and earn
                the trust of the medical fraternity and patients through
                concern, care and cure.
              </p>

              <p>
                Manuel Therapeutics shall evolve as a socially responsive
                corporate entity, an epitome of total integrity, trust and
                customer satisfaction.
              </p>

              <p>
                As a part of our commitment to fight malnutrition across the
                world, we extend our efforts to the least nourished people in
                the world. Our Comprehensive high-quality nutrition is the most
                important factor in maintaining good health and recovering from
                illnesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16  relative">
        <StatsSection />
      </div>
      <div className="relative">
        {" "}
        <AboutUs1 />{" "}
      </div>
    </section>
  );
}
