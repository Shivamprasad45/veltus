import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Why <span className="text-red-500">Choose Us</span> ?
      </h2>
      <p className="text-center text-gray-700 mt-4">
        At Manuel Therapeutics, we’re dedicated to providing you with health
        supplements that are not only effective but also backed by science and a
        commitment to your well-being. Here’s why you should choose Tyteen and
        Tyteen Plus:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col items-center text-center bg-green-200 p-6 rounded-lg shadow-lg">
          <div className="bg-white p-3 rounded-full border-2 border-red-500">
            🔥
          </div>
          <h3 className="font-semibold mt-4">A pure and honest vision</h3>
        </div>
        <div className="flex flex-col items-center text-center bg-green-200 p-6 rounded-lg shadow-lg">
          <div className="bg-white p-3 rounded-full border-2 border-red-500">
            🌎
          </div>
          <h3 className="font-semibold mt-4">Spread all over Country</h3>
        </div>
        <div className="flex flex-col items-center text-center bg-green-200 p-6 rounded-lg shadow-lg">
          <div className="bg-white p-3 rounded-full border-2 border-red-500">
            ⭐
          </div>
          <h3 className="font-semibold mt-4">10 Years of quality</h3>
        </div>
        <div className="flex flex-col items-center text-center bg-green-200 p-6 rounded-lg shadow-lg">
          <div className="bg-white p-3 rounded-full border-2 border-red-500">
            💖
          </div>
          <h3 className="font-semibold mt-4">Commitment to well-being</h3>
        </div>
      </div>
      <div className="mt-8 text-gray-700">
        <ol className="list-decimal pl-6">
          <li>
            <strong>Premium Ingredients:</strong> Our products, Tyteen and
            Tyteen Plus, are meticulously crafted with high-quality ingredients.
          </li>
          <li>
            <strong>Diabetic-Friendly:</strong> Our formulas are sweetened with
            Sucralose, making them safe for diabetic patients.
          </li>
          <li>
            <strong>Dietitian-Recommended:</strong> Our products come highly
            recommended by leading dietitians and nutritionists.
          </li>
        </ol>
        <p className="mt-4">
          With our production base in Satara, Maharashtra, India, we are
          committed to delivering exceptional health supplements that empower
          you on your wellness journey.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
