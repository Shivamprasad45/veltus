import Image from "next/image";

const products = [
  {
    id: 1,
    name: "TYTEEN Vanilla Protein Powder(400 gm)",
    image:
      "https://manuel.co.in/wp-content/uploads/2024/01/tyteen_front-e1705487716303.png",
    alt: "TYTEEN Vanilla Protein Powder",
  },
  {
    id: 2,
    name: "TYTEEN Plus Vanilla Protein Powder(400 gm)",
    image:
      "https://manuel.co.in/wp-content/uploads/2024/01/tyteen_front-e1705487716303.png",
    alt: "TYTEEN Plus Vanilla Protein Powder",
  },
  {
    id: 3,
    name: "Mineral Syrup",
    image:
      "https://manuel.co.in/wp-content/uploads/2024/01/tyteen_front-e1705487716303.png",
    alt: "Mineral Syrup",
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl font-bold text-gray-900">
        <span className="text-blue-600">Trending </span>
        <span className="text-orange-500">Products</span>
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        We understand the importance of approaching each work integrally and
        believe in the power of simple and easy communication.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 shadow-lg p-4 rounded-lg hover:shadow-xl transition"
          >
            <Image
              src={product.image}
              alt={product.alt}
              width={250}
              height={300}
              className="mx-auto"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg flex items-center justify-center mx-auto hover:bg-green-600">
              ➜ Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
