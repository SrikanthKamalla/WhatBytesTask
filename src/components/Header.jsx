import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-[#1e1e1e] text-white sticky top-0 z-50 shadow-md">
      <div className="font-bold text-xl text-[#ff0000]">Logo</div>

      <Search />
      <input
        type="text"
        placeholder="Search for products..."
        className="w-1/2 p-2 rounded border border-gray-300 text-white"
      />

      <div className="flex items-center gap-4">
        <button className="relative">
          <span className="material-icons text-[#ff0000]">
            <ShoppingCart />
          </span>
        </button>
      </div>
    </header>
  );
}
