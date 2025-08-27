import React, { useState } from "react";
import asuslaptop from "../assets/asus.png";
import batashoes from "../assets/batashoes.png";
import realmebuds from "../assets/realmebuds2wired.png";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Cool Sneakers",
      price: 59.99,
      quantity: 1,
      image: asuslaptop,
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 129.99,
      quantity: 2,
      image: batashoes,
    },
    {
      id: 3,
      title: "realme buds",
      price: 129.99,
      quantity: 3,
      image: realmebuds,
    },
  ]);

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal > 200 ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal - discount + tax + shipping;

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-4 ">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>

      <div className="sm:flex flex-row gap-6">
        <div className="flex flex-col gap-4 sm: w-1/2">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-[#2a2a2a] p-3 rounded-lg shadow "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-3 flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-400 text-sm">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, "dec")}
                      className="px-2 py-1 bg-gray-600 rounded"
                    >
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "inc")}
                      className="px-2 py-1 bg-gray-600 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-[#ff0000] font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 text-white text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center mt-6">
              Your cart is empty 🛒
            </p>
          )}
        </div>
        <div className="sm:w-1/2">
          {cartItems.length > 0 && (
            <div className="bg-[#2a2a2a] p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Discount</span>
                <span className="text-green-400">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Estimated Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <hr className="border-gray-600 my-2" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full bg-[#ff0000] py-3 rounded-lg text-white font-semibold">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
