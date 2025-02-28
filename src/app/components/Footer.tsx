const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              Manual Therapeutics
            </h2>
            <p className="text-gray-400 text-sm">
              The variety of products available at our store at the moment is
              vast, but we still continue to value our assessment.
            </p>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Information
            </h3>
            <ul className="space-y-2">
              {["Home", "About us", "Contact us", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Official Info:
            </h3>
            <div className="text-gray-400 space-y-2 text-sm">
              <p>Tumori Therapeutics – 8 & 8 Annual Next Results</p>
              <p>13. MV Wojewegen, Pure-W1002, India</p>
              <p>+81 8008100071</p>
              <p>+81 976646981</p>
              <p>www.edreamand.co.in</p>
            </div>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Open Hours:
            </h3>
            <div className="text-gray-400 text-sm">
              <p>
                <strong className="text-yellow-400">Thai – Sat:</strong> 5 am –
                5 pm,
              </p>
              <p>
                <strong className="text-yellow-400">Sensley:</strong> CLOSED
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>
              © From 2019 All rights reserved. All Rights Reserved by Manual
              Therapeutics.
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-yellow-400">
                Terms of Use
              </a>
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
