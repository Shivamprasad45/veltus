import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Why <span className="text-red-500">Choose Vultus</span>?
      </h2>
      <p className="text-center text-gray-700 mt-4">
        At <span className="font-semibold">Vultus</span>, we are dedicated to
        crafting scientifically backed health supplements that enhance your
        well-being. Our products,{" "}
        <span className="font-semibold">Vultamin-Gold</span> and{" "}
        <span className="font-semibold">Vullax</span>, are designed with premium
        ingredients to support overall health and vitality.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col items-center text-center bg-green-200 p-6 rounded-lg shadow-lg">
          <div className="bg-white p-3 rounded-full border-2 border-red-500">
            🔥
          </div>
          <h3 className="font-semibold mt-4">Pure and Honest Formulation</h3>
        </div>
        <div className="flex flex-col items-center text-center bg-green-200 p-6 rounded-lg shadow-lg">
          <div className="bg-white p-3 rounded-full border-2 border-red-500">
            🌎
          </div>
          <h3 className="font-semibold mt-4">Trusted Nationwide</h3>
        </div>
        <div className="flex flex-col items-center text-center bg-green-200 p-6 rounded-lg shadow-lg">
          <div className="bg-white p-3 rounded-full border-2 border-red-500">
            ⭐
          </div>
          <h3 className="font-semibold mt-4">10 Years of Quality</h3>
        </div>
        <div className="flex flex-col items-center text-center bg-green-200 p-6 rounded-lg shadow-lg">
          <div className="bg-white p-3 rounded-full border-2 border-red-500">
            💖
          </div>
          <h3 className="font-semibold mt-4">Commitment to Well-being</h3>
        </div>
      </div>

      <div className="mt-8 text-gray-700">
        <ol className="list-decimal pl-6">
          <li>
            <strong>Premium Ingredients:</strong>{" "}
            <span className="font-semibold">Vultamin-Gold</span> and{" "}
            <span className="font-semibold">Vullax</span> are meticulously
            formulated with high-quality nutrients and herbal extracts.
          </li>
          <li>
            <strong>Scientifically Backed:</strong> Each ingredient is selected
            based on clinical research to ensure maximum effectiveness.
          </li>
          <li>
            <strong>Safe and Reliable:</strong> Our supplements are carefully
            crafted to be non-habit forming and suitable for all ages.
          </li>
        </ol>
        <p className="mt-4">
          With our production facility based in{" "}
          <strong>Satara, Maharashtra, India</strong>, we are committed to
          delivering excellence in health and wellness. Choose{" "}
          <span className="font-semibold">Vultus</span> for a healthier
          tomorrow.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
