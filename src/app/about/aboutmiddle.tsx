"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const interval = 20; // Update every 20ms
    const step = (target / (duration / interval)) as number;

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
    >
      {count}
    </motion.span>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Stat Item 1 */}
          <div className="p-6">
            <div className="text-5xl font-bold mb-3">
              <Counter target={1542} />
              <span className="text-yellow-400">*</span>
            </div>
            <div className="text-lg uppercase tracking-wider">
              Satisfied Clients
            </div>
          </div>

          {/* Stat Item 2 */}
          <div className="p-6">
            <div className="text-5xl font-bold mb-3">
              <Counter target={182} />
            </div>
            <div className="text-lg uppercase tracking-wider">Expert Team</div>
          </div>

          {/* Stat Item 3 */}
          <div className="p-6">
            <div className="text-5xl font-bold mb-3">
              <Counter target={285} />
              <span className="text-yellow-400">*</span>
            </div>
            <div className="text-lg uppercase tracking-wider">
              Activate Products
            </div>
          </div>

          {/* Stat Item 4 */}
          <div className="p-6">
            <div className="text-5xl font-bold mb-3">
              <Counter target={27} />
              <span className="text-yellow-400">*</span>
            </div>
            <div className="text-lg uppercase tracking-wider">
              Awards Winning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
