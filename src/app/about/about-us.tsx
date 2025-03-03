import AboutUs1 from "./About1";
import StatsSection from "./aboutmiddle";
import { Award, ShieldCheck, BadgeCheck, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";
export default function AboutUs() {
  const features = [
    {
      title: "OEM Excellence",
      description: "Our OEM services extend beyond manufacturing.",
      icon: <Award className="w-10 h-10 text-green-600" />,
    },
    {
      title: "100% Original",
      description: "We guarantee you the sale of Original Brands.",
      icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Commitment to Quality",
      description: "Quality is at the core of everything we do.",
      icon: <BadgeCheck className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Quality Assurance",
      description: "Quality assurance is our promise of excellence.",
      icon: <PackageCheck className="w-10 h-10 text-green-600" />,
    },
  ];
  return (
    <section className="relative w-full py-16 bg-[#f5f7e8] overflow-hidden">
      {/* Background diagonal shape */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-[#eaedda] transform -skew-x-12 -translate-x-20"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Feature boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-md shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg hover:bg-green-50 transition-all"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center border-2 border-orange-500 rounded-full relative">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
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
                We envision vultus to emerge as an acclaimed transnational
                pharmaceutical company delivering high quality, innovative yet
                affordable branded generic formulations and earn the trust of
                the medical fraternity and patients through concern, care and
                cure.
              </p>

              <p>
                vultus shall evolve as a socially responsive corporate entity,
                an epitome of total integrity, trust and customer satisfaction.
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
