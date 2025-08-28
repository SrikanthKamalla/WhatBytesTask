import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearFilter } from "../store/productSlice";

export default function Sidebar({ open, onClose }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const filter = useSelector((state) => state.products.filter);

  const categories = [...new Set(products.map((p) => p.category))];

  const prices = products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [selectedCategory, setSelectedCategory] = useState(
    filter.category[0] || ""
  );
  const [priceRange, setPriceRange] = useState(filter.priceRange);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (e) => {
    setPriceRange([minPrice, Number(e.target.value)]);
  };

  useEffect(() => {
    dispatch(
      setFilter({
        category: selectedCategory ? [selectedCategory] : [],
        priceRange: priceRange,
      })
    );
  }, [selectedCategory, priceRange, dispatch]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 sm:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0858a8] text-white p-4 z-20 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        sm:static sm:translate-x-0 sm:w-1/5 sm:min-w-[155px] sm:border-r sm:m-4 sm:rounded-2xl`}
      >
        <div className="rounded-2xl p-4 h-full flex flex-col">
          <h3 className="font-semibold mb-4 text-2xl">Filters</h3>

          <div className="mb-4">
            <h4 className="font-medium mb-2 text-xl">Category</h4>
            {categories.map((category) => (
              <div key={category}>
                <input
                  type="radio"
                  name="category"
                  id={`category-${category}`}
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                  className="custom-radio appearance-none w-5 h-5 rounded-full border-2 checked:border-4 border-white cursor-pointer"
                />
                <label
                  className="ml-1 cursor-pointer"
                  htmlFor={`category-${category}`}
                >
                  {category}
                </label>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-2">Price</h4>
            <input
              type="range"
              className="accent-white w-full"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={handlePriceChange}
            />
            <div className="text-sm mb-1 flex justify-between">
              <span>{priceRange[0]}</span>
              <span>{priceRange[1]}</span>
            </div>
          </div>

          <button
            className="mt-auto px-3 py-2 bg-white text-[#0858a8] rounded cursor-pointer"
            onClick={() => {
              setSelectedCategory("");
              setPriceRange([minPrice, maxPrice]);
              dispatch(clearFilter());
            }}
          >
            Clear Filters
          </button>
        </div>
      </aside>
    </>
  );
}
