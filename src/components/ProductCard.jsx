export default function ProductCard({ product }) {
  return (
    <div className="w-full max-w-[400] mx-auto rounded-lg shadow hover:shadow-lg transition p-12 min-h-[500px] mt-4 px-12 py-5">
      <div className="min-h-80 bg-white object-cover rounded flex justify-center items-center p-4">
        <img src={product.image} alt={product.title} className="object-cover" />
      </div>
      <h3 className="mt-2 font-semibold text-white text-xl">{product.title}</h3>
      <p className="text-white text-lg">${product.price}</p>
      <button className="mt-3 bg-black text-white rounded px-5 py-4">
        Add to Cart
      </button>
    </div>
  );
}
