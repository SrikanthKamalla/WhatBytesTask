import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity, removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({ ...product, qty: 1 }));
  };

  const handleIncrease = (e) => {
    e.stopPropagation();
    dispatch(updateQuantity({ id: product.id, qty: cartItem.qty + 1 }));
  };

  const handleDecrease = (e) => {
    e.stopPropagation();
    if (cartItem.qty === 1) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(updateQuantity({ id: product.id, qty: cartItem.qty - 1 }));
    }
  };

  return (
    <div
      className="w-full max-w-[400px] mx-auto rounded-lg shadow hover:shadow-lg transition p-4 min-h-[500px] mt-4 bg-[#1e1e1e] text-white flex flex-col justify-between cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="min-h-80 bg-white object-cover rounded flex justify-center items-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain max-h-64"
        />
      </div>

      <div className="mt-4 flex-1 flex flex-col justify-between">
        <h3 className="font-semibold text-xl">{product.title}</h3>
        <p className="text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold">${product.price}</p>
          <p className="text-yellow-400 font-semibold">{product.rating} ★</p>
        </div>

        {cartItem ? (
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={handleDecrease}
              className="px-3 py-2 bg-gray-600 rounded-lg text-white font-semibold cursor-pointer"
            >
              –
            </button>
            <span className="text-white font-semibold">{cartItem.qty}</span>
            <button
              onClick={handleIncrease}
              className="px-3 py-2 bg-gray-600 rounded-lg text-white font-semibold cursor-pointer"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full py-3 mt-4 bg-black rounded-lg text-white font-semibold cursor-pointer transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
