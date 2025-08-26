import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <div className="flex bg-[#111111] min-h-screen gap-x-4">
      <Sidebar />
      <div className="flex-1">
        <ProductGrid />
      </div>
    </div>
  );
}
