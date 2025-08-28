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
    <header className="bg-[#0858a8] px-10 text-white sticky top-0 z-50 shadow-md py-5 sm:w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 relative">
        <div
          className="font-bold text-xl text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="w-60" />
        </div>

        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer" />
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search for products..."
            className="w-full p-2 pl-11 rounded border bg-transparent text-white focus:outline-none"
          />
        </div>

        <div className="flex items-center p-2 sm:p-3 rounded justify-end sm:static absolute top-0 right-0 bg-[#06396c] cursor-pointer">
          <button
            className="relative flex cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <span className="hidden sm:block">Cart&nbsp;</span>
            <ShoppingCart className="text-[#d5d5d5] w-6 h-6 cursor-pointer" />
          </button>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-white rounded-full w-5 h-5 flex items-center justify-center text-xs text-black font-bold">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
