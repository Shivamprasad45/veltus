"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#334155"
            fillOpacity="1"
            d="M0,96L48,133.3C96,171,192,245,288,250.7C384,256,480,192,576,186.7C672,181,768,235,864,229.3C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              Vultus Life Sciences Pvt Ltd
            </h2>
            <p className="text-gray-400 text-sm">
              Advancing healthcare solutions with innovation and precision.
            </p>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Information
            </h3>
            <ul className="space-y-2">
              {["Home", "About us", "Contact us", "Blog"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Official Info:
            </h3>
            <div className="text-gray-400 space-y-2 text-sm">
              <p>Vultus Life Sciences Pvt Ltd</p>
              <p>Office No: B-106, Vraj Life Space</p>
              <p>Opp RTO Office, Peth Road, Nashik</p>
              <p>Pin: 422003, India</p>
              <p>Mob: 95291 90408</p>
              <p>Mob: 7982456265</p>
              <p>Office: 0253-4503370</p>
            </div>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Open Hours:
            </h3>
            <div className="text-gray-400 text-sm">
              <p>
                <strong className="text-yellow-400">Mon – Sat:</strong> 9 AM – 6
                PM
              </p>
              <p>
                <strong className="text-yellow-400">Sunday:</strong> CLOSED
              </p>
            </div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p>
            © {new Date().getFullYear()} All rights reserved. Vultus Life
            Sciences Pvt Ltd.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-yellow-400">
              Terms of Use
            </a>
            <span className="mx-2">/</span>
            <a href="#" className="hover:text-yellow-400">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
