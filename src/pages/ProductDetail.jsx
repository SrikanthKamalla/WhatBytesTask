import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="w-full min-h-screen bg-[#111111] p-8 px-12 text-white ">
      <div className="product-div sm:flex sm:flex-row gap-2">
        <div className="min-h-80 max-h-80 bg-white flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 sm:h-80  object-cover rounded-lg"
          />
        </div>
        <div className="sm:m-10">
          <h2 className="mt-4 text-2xl font-bold">{product.title}</h2>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            {product.description}
          </p>
          <p className="mt-3 text-2xl font-semibold text-[#ff0000]">
            ${product.price}
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full bg-black py-3 rounded-lg text-white font-semibold">
              Add to Cart
            </button>
            <button className="w-full bg-[#ff0000] py-3 rounded-lg text-white font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="suggestion"></div>
    </div>
  );
};

export default ProductDetail;
