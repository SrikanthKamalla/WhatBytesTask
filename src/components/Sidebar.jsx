export default function Sidebar() {
  return (
    <aside className="p-4 border-r border-gray-700 w-1/7 hidden min-w-[155px] sm:block text-white">
      <h3 className="font-semibold mb-2">Filters</h3>
      <div className="m-4">
        <h4 className="font-medium">Category</h4>
        <div>
          <input type="checkbox" id="phones" /> <label>Phones</label>
        </div>
        <div>
          <input type="checkbox" id="laptops" /> <label>Laptops</label>
        </div>
      </div>

      <div>
        <h4 className="font-medium ">Price</h4>
        <input type="range" className="accent-[#ff0000]" min="0" max="2000" />
      </div>
    </aside>
  );
}
