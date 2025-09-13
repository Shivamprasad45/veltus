import React from "react";

const CorporateOffice = () => {
  return (
    <section className="relative text-white py-16 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1e293b"
            fillOpacity="1"
            d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,197.3C840,181,960,107,1080,80C1200,53,1320,75,1380,85.3L1440,96V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
            Corporate Headquarters (Nashik)
          </h2>

          <div className="space-y-8">
            {/* Main Office */}
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Vultus Life Sciences Pvt Ltd
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Office No: B-106, Vraj Life Space,
                <br />
                Opp RTO Office, Peth Road, Nashik,
                <br />
                Pin - 422003
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8">
              <p className="font-semibold text-lg text-yellow-400">Contact</p>
              <div className="text-gray-400 space-y-1">
                <p className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Mobile: +91 95291 90408
                </p>
                <p className="hover:text-yellow-400 transition-colors cursor-pointer">
                  Office: 0253-4503370
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateOffice;
