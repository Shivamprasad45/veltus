import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Vultamin-Gold",
    image:
      "https://res.cloudinary.com/dn633knvv/image/upload/v1740743449/pixelcut-export_upscaled_zl9ymz.png",
    alt: "Vultamin-Gold",
  },
  {
    id: 3,
    name: "Vullax",
    image:
      "https://res.cloudinary.com/dn633knvv/image/upload/v1740744420/botle_upscaled-removebg-preview_upscaled_mfrrd5.png",
    alt: "Vullax",
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-blue-600">Trending </span>
            <span className="text-orange-500">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand the importance of approaching each work integrally and
            believe in the power of simple and easy communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-sm border border-gray-200"
            >
              <div className="aspect-square bg-gray-100 rounded-t-2xl flex items-center justify-center p-8">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={300}
                  height={300}
                  className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
