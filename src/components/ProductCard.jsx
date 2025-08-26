export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold text-white">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-2 w-full  bg-[#000000] text-white py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}
