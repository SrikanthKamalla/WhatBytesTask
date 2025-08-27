import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearFilter } from "../store/productSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const filter = useSelector((state) => state.products.filter);

  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];

  const prices = products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [selectedCategories, setSelectedCategories] = useState(filter.category);
  const [selectedBrands, setSelectedBrands] = useState(filter.brand);
  const [priceRange, setPriceRange] = useState(filter.priceRange);

  const handleCategoryChange = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
  };

  const handleBrandChange = (brand) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updated);
  };

  const handlePriceChange = (e) => {
    setPriceRange([minPrice, Number(e.target.value)]);
  };

  useEffect(() => {
    dispatch(
      setFilter({
        category: selectedCategories,
        brand: selectedBrands,
        priceRange: priceRange,
      })
    );
  }, [selectedCategories, selectedBrands, priceRange, dispatch]);

  return (
    <aside className="p-4 border-r border-gray-700 w-1/7 hidden sm:block min-w-[155px] text-white">
      <h3 className="font-semibold mb-4">Filters</h3>

      <div className="mb-4">
        <h4 className="font-medium mb-2">Category</h4>
        {categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={`category ${category}`}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <label
              className="ml-1 cursor-pointer"
              htmlFor={`category ${category}`}
            >
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="font-medium mb-2">Brand</h4>
        {brands.map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              id={`brand ${brand}`}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <label className="ml-1 cursor-pointer" htmlFor={`brand ${brand}`}>
              {brand}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="font-medium mb-2">Price</h4>
        <p className="text-sm mb-1">
          {priceRange[0]} - {priceRange[1]}
        </p>
        <input
          type="range"
          className="accent-[#f00f18] w-full"
          min={minPrice}
          max={maxPrice}
          value={priceRange[1]}
          onChange={handlePriceChange}
        />
      </div>

      <button
        className="mt-4 px-2 py-1 bg-[#f00f18] rounded"
        onClick={() => {
          setSelectedCategories([]);
          setSelectedBrands([]);
          setPriceRange([minPrice, maxPrice]);
          dispatch(clearFilter());
        }}
      >
        Clear Filters
      </button>
    </aside>
  );
}
