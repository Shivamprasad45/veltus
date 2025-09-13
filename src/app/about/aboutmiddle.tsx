"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Award, CheckCircle, Box } from "lucide-react"; // Importing icons

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const interval = 20;
    const step = target / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, interval);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-yellow-400"
    >
      {count}
    </motion.span>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {/* Stat Item 1 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-8 bg-gray-800 rounded-2xl shadow-lg"
          >
            <Users className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
            <div className="text-5xl font-bold">
              <Counter target={1542} />+
            </div>
            <p className="text-lg uppercase tracking-wide mt-2">
              Satisfied Clients
            </p>
          </motion.div>

          {/* Stat Item 2 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-8 bg-gray-800 rounded-2xl shadow-lg"
          >
            <CheckCircle className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
            <div className="text-5xl font-bold">
              <Counter target={182} />+
            </div>
            <p className="text-lg uppercase tracking-wide mt-2">Expert Team</p>
          </motion.div>

          {/* Stat Item 3 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-8 bg-gray-800 rounded-2xl shadow-lg"
          >
            <Box className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
            <div className="text-5xl font-bold">
              <Counter target={285} />+
            </div>
            <p className="text-lg uppercase tracking-wide mt-2">
              Activate Products
            </p>
          </motion.div>

          {/* Stat Item 4 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-8 bg-gray-800 rounded-2xl shadow-lg"
          >
            <Award className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
            <div className="text-5xl font-bold">
              <Counter target={27} />+
            </div>
            <p className="text-lg uppercase tracking-wide mt-2">
              Awards Winning
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
