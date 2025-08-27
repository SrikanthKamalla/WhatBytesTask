import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart, clearCart } from "../store/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleUpdateQuantity = (id, type) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    const newQty = type === "inc" ? item.qty + 1 : item.qty - 1;
    dispatch(updateQuantity({ id, qty: newQty }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const discount = subtotal > 200 ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal - discount + tax + shipping;

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>

      <div className="sm:flex flex-row gap-6">
        <div className="flex flex-col gap-4 sm:w-1/2">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-3 rounded-lg shadow bg-[#afcfee]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-3 flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-md">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, "dec")}
                      className="px-2 py-1 rounded cursor-pointer"
                    >
                      –
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, "inc")}
                      className="px-2 py-1 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="font-bold">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="mt-2 text-sm cursor-pointer"
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

        {cartItems.length > 0 && (
          <div className="sm:w-1/2">
            <div className="p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-md">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-md">Discount</span>
                <span className="text-[#0858a8]">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-sm">Estimated Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <hr className="border-gray-600 my-2" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                className="mt-4 w-full bg-[#0858a8] py-3 rounded-lg text-white font-semibold cursor-pointer"
                onClick={() => dispatch(clearCart())}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
