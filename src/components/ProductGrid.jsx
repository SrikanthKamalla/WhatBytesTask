import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { selectFilteredProducts } from "../store/productSlice";

export default function ProductGrid() {
  const products = useSelector(selectFilteredProducts);

  if (products.length === 0) {
    return <p className="text-center mt-10">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 w-6/7 sm:grid-cols-2 sm:w-[100%] lg:grid-cols-3 gap-6 m-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
