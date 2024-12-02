import React from "react";
import noise from "../assets/noise.png";
import speech from "../assets/speech.png";
import fidget from "../assets/fidget.png";

const OurProducts = () => {
  // Product data
  const products = [
    {
      image: noise,
      title: "Noise cancelling headphones.",
    },
    {
      image: speech,
      title: "Speech Generating Devices",
    },
    {
      image: fidget,
      title: "Fidget toys for autism",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <h1 className="text-center text-2xl font-bold mb-6">Buy our products!</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-40 object-contain"
            />
            <p className="mt-4 text-center font-medium">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
