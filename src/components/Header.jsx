import { Search, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setFilter } from "../store/productSlice";
import { useDispatch } from "react-redux";
import logo from "../assets/Logo.png";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.qty, 0)
  );
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(setFilter({ search: e.target.value }));
  };

  return (
    <header className="bg-[#1e1e1e] px-6 text-white sticky top-0 z-50 shadow-md py-5 sm:w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 relative">
        <div
          className="font-bold text-xl text-[#f00f18] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="w-60" />
        </div>

        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search for products..."
            className="w-full p-2 pr-11 rounded border border-gray-300 bg-transparent text-white placeholder-[#ff0000] focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
        </div>

        <div className="flex items-center justify-end sm:static absolute top-5 right-5">
          <button className="relative" onClick={() => navigate("/cart")}>
            <ShoppingCart className="text-[#f00f18] w-6 h-6 cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#f00f18] rounded-full w-5 h-5 flex items-center justify-center text-xs text-white font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
