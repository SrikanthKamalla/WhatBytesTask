import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="flex-1 flex flex-col">
        <header className="p-4 shadow-md flex flex-row-reverse items-center bg-white sticky top-0 z-40">
          <button
            className="sm:hidden bg-[#0858a8] text-white px-3 py-1 rounded cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            Filter
          </button>
        </header>

        <main className="p-4">
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}
