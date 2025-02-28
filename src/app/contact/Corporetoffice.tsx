const CorporateOffice = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">
            Corporate Headquarters (Pune)
          </h2>

          <div className="space-y-8">
            {/* Main Office */}
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="text-xl font-semibold mb-2">
                Manuel Therapeutics
              </h3>
              <p className="text-gray-400 text-sm">
                8 & 9, Surobhi Kunj, Road No 13, 3471,
                <br />
                Widyanagar, Pune 410032
              </p>
            </div>

            {/* Warehouse */}
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="text-xl font-semibold mb-2">
                Manuel Therapeutics (Warehouse)
              </h3>
              <p className="text-gray-400 text-sm">
                32, Ajanta Complex, CTS-499,
                <br />
                Rasta Peth, Pune - 410011
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-2">
              <p className="font-semibold text-lg">India</p>
              <div className="text-gray-400 space-y-1">
                <p className="hover:text-yellow-400 transition-colors">
                  +91 8308010007
                </p>
                <p className="hover:text-yellow-400 transition-colors">
                  +91 9765406191
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
