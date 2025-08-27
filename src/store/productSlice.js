import { createSlice, createSelector } from "@reduxjs/toolkit";
import asianshoes from "../assets/asianshoes.png";
import asuslaptop from "../assets/asus.png";
import batashoes from "../assets/batashoes.png";
import realmebuds from "../assets/realmebuds2wired.png";
import vivox200 from "../assets/vivoX200fe.png";
import redmenote9promax from "../assets/redmeNote9proMax.png";

const items = [
  {
    id: 1,
    title: "Asian Running Shoes",
    price: 1299,
    qty: 1,
    image: asianshoes,
    rating: 4.2,
    category: "Footwear",
    description:
      "Lightweight and comfortable running shoes designed for everyday wear and fitness activities.",
  },
  {
    id: 2,
    title: "Asus Vivobook Laptop",
    price: 45999,
    qty: 1,
    image: asuslaptop,
    rating: 4.5,
    category: "Laptops",
    description:
      "Asus Vivobook with Intel i5 processor, 8GB RAM, and 512GB SSD. Perfect for work, study, and entertainment.",
  },
  {
    id: 3,
    title: "Bata Formal Shoes",
    price: 2499,
    qty: 1,
    image: batashoes,
    rating: 4,
    category: "Footwear",
    description:
      "Classic Bata formal shoes with premium leather finish. Ideal for office wear and formal occasions.",
  },
  {
    id: 4,
    title: "Realme Buds 2 Wired Earphones",
    price: 799,
    qty: 1,
    image: realmebuds,
    rating: 4.3,
    category: "Accessories",
    description:
      "Realme Buds 2 with powerful bass, tangle-free cable, and built-in mic for calls and music control.",
  },
  {
    id: 5,
    title: "Vivo X200 FE Smartphone",
    price: 27999,
    qty: 1,
    image: vivox200,
    rating: 4.4,
    category: "Smartphones",
    description:
      "Vivo X200 FE with AMOLED display, 5G support, Snapdragon processor, and advanced camera system.",
  },
  {
    id: 6,
    title: "Redmi Note 9 Pro Max",
    price: 15999,
    image: redmenote9promax,
    qty: 1,
    rating: 4.1,
    category: "Smartphones",
    description:
      "Redmi Note 9 Pro Max with 6.67-inch display, quad-camera setup, and 5020mAh battery for long-lasting performance.",
  },
];

const prices = items.map((p) => p.price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);

const initialState = {
  products: items,
  filter: {
    category: [],
    priceRange: [minPrice, maxPrice],
    search: "",
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
    clearFilter(state) {
      const prices = state.products.map((p) => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      state.filter = {
        category: [],
        priceRange: [minPrice, maxPrice],
        search: "",
      };
    },
  },
});

export const selectFilteredProducts = createSelector(
  (state) => state.products.products,
  (state) => state.products.filter,
  (products, filter) =>
    products.filter((p) => {
      const matchesCategory =
        filter.category.length === 0 || filter.category.includes(p.category);

      const matchesPrice =
        p.price >= filter.priceRange[0] && p.price <= filter.priceRange[1];

      const matchesSearch = p.title
        .toLowerCase()
        .includes(filter.search.toLowerCase());

      return matchesCategory && matchesPrice && matchesSearch;
    })
);

export const { setFilter, clearFilter } = productSlice.actions;
export default productSlice.reducer;
