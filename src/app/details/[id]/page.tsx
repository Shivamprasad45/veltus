"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = [
    {
      name: "Vultamin-Gold",
      scientificName: "Multivitamin and Herbal Supplement Formula",
      description:
        "Taking Vultamin-Gold regularly provides essential vitamins, minerals, antioxidants, and herbal extracts for overall well-being.",
      price: 29.99,
      images: [
        "https://res.cloudinary.com/dn633knvv/image/upload/v1740743449/pixelcut-export_upscaled_zl9ymz.png",
        "https://res.cloudinary.com/dn633knvv/image/upload/v1740907028/pack_teuvpn.jpg", // Replace with actual secondary image
      ],
      benefits: [
        "Boosts Immunity",
        "Supports Heart Health",
        "Enhances Brain Function & Mental Clarity",
        "Improves Energy & Reduces Fatigue",
        "Promotes Healthy Skin, Hair & Nails",
        "Strengthens Bones & Joints",
        "Aids Digestion & Gut Health",
        "Reduces Inflammation & Supports Recovery",
        "Protects Eye Health",
        "Supports Hormonal Balance & Reproductive Health",
      ],
      ingredients: [
        {
          name: "Omega-3 Fatty Acids (EPA & DHA)",
          benefits: [
            "Supports heart health by reducing triglycerides",
            "Improves brain function and cognitive health",
            "Reduces inflammation and supports joint health",
          ],
        },
        {
          name: "Green Tea Extract (Polyphenols)",
          benefits: [
            "Rich in antioxidants, helps in weight loss",
            "Boosts metabolism and supports heart health",
            "Improves brain function and reduces oxidative stress",
          ],
        },
      ],
    },
    {
      name: "Vullax",
      scientificName: "Lactulose Oral Solution USP",
      description:
        "Used for constipation relief and management of Portal Systemic Encephalopathy (PSE). Helps regulate bowel movements and supports liver health.",
      price: 19.99,
      images: [
        "https://res.cloudinary.com/dn633knvv/image/upload/v1740744420/botle_upscaled-removebg-preview_upscaled_mfrrd5.png",
        "https://res.cloudinary.com/dn633knvv/image/upload/v1740907046/botell_bdiclr.jpg", // Replace with actual secondary image
      ],
      benefits: [
        "Non-Habit Forming",
        "Gentle and Effective",
        "Supports Liver Health",
        "Improves Digestion",
        "Safe for All Ages",
      ],
      ingredients: [
        {
          name: "Lactulose",
          benefits: [
            "Acts as a gentle laxative",
            "Reduces ammonia levels in blood",
            "Balances gut bacteria",
          ],
        },
      ],
      dosage: {
        constipation: "15-45 ml per day",
        PSE: "30-50 ml, three times daily",
      },
      storage: "Keep between 2°C to 30°C. Do not freeze the solution.",
    },
  ];

  const item = product[Number.parseInt(params.id)];

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-200 to-green-500 opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl w-full"
      >
        {/* Product Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">{item.name}</h1>
          <p className="text-gray-600 italic">{item.scientificName}</p>
        </div>

        {/* Image Gallery Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Main Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 flex items-center justify-center"
          >
            <Image
              src={item.images[activeImageIndex] || "/placeholder.svg"}
              alt={`${item.name} view ${activeImageIndex + 1}`}
              width={300}
              height={300}
              className="object-contain max-h-[300px]"
            />

            {/* Image Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {item.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeImageIndex === index ? "bg-green-600" : "bg-gray-300"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev === 0 ? item.images.length - 1 : prev - 1
                )
              }
              className="absolute left-2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-green-700" />
            </button>
            <button
              onClick={() =>
                setActiveImageIndex((prev) => (prev + 1) % item.images.length)
              }
              className="absolute right-2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-green-700" />
            </button>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                <h2 className="text-lg font-semibold text-green-800 mb-2">
                  Key Features
                </h2>
                <ul className="grid grid-cols-2 gap-2">
                  {item.benefits.slice(0, 6).map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-8">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold text-green-800 border-b border-green-200 pb-2 mb-4">
              All Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {item.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-green-50 text-green-700 px-4 py-3 rounded-lg shadow-sm flex items-center"
                >
                  <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-700 font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ingredients Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold text-green-800 border-b border-green-200 pb-2 mb-4">
              Active Ingredients
            </h2>
            {item.ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-yellow-50 border border-yellow-100 p-4 mt-3 rounded-lg"
              >
                <p className="font-semibold text-yellow-800">
                  {ingredient.name}
                </p>
                <ul className="mt-2 space-y-1">
                  {ingredient.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <span className="text-yellow-500 mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Dosage Information (for Vullax) */}
          {item.dosage && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100"
            >
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                Dosage Guidelines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <p className="font-medium text-blue-700">For Constipation</p>
                  <p className="text-gray-700">{item.dosage.constipation}</p>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <p className="font-medium text-blue-700">
                    For PSE (Liver Disease)
                  </p>
                  <p className="text-gray-700">{item.dosage.PSE}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Storage Information (for Vullax) */}
          {item.storage && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Storage Instructions
              </h2>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600">🧊</span>
                </div>
                <p className="text-gray-700">{item.storage}</p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
