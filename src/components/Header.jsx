import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#1e1e1e] px-6 text-white sticky top-0 z-50 shadow-md py-5 sm:w-full ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="font-bold text-xl text-[#ff0000] cursor-pointer">
          Logo
        </div>

        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-2 pr-11 rounded border border-gray-300 bg-transparent text-white placeholder-[#ff0000] focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
        </div>

        <div className="flex items-center justify-end absolute top-5 right-5 sm:static lg:static">
          <button className="relative">
            <ShoppingCart className="text-[#ff0000] w-6 h-6 cursor-pointer" />
          </button>
        </div>
      </div>
    </header>
  );
}
