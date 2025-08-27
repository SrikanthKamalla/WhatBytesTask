import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <p className="text-white text-center mt-10">Product not found.</p>;
  }

  const handleAddToCart = (event) => {
    dispatch(addToCart(product));
    const buttonText = event.target.textContent.trim();
    if (buttonText == "Buy Now") {
      navigate("/cart");
    }
  };

  return (
    <div className="w-full min-h-screen p-8 px-12">
      <div className="product-div sm:flex sm:flex-row gap-2">
        <div className="min-h-80 max-h-80 flex justify-center items-center rounded md:min-h-120 md:min-w-120 md:max-h-120">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 sm:h-80 object-cover rounded-lg"
          />
        </div>

        <div className="sm:m-10 flex-1">
          <h2 className="mt-4 text-2xl font-bold">{product.title}</h2>
          <p className="mt-2  text-md leading-relaxed">{product.description}</p>
          <p className="mt-3 text-2xl font-semibold">${product.price}</p>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 rounded-lg font-semibold bg-[#30669c] text-white "
            >
              Add to Cart
            </button>
            <button
              className="w-full bg-[#0858a8] py-3 rounded-lg text-white font-semibold"
              onClick={handleAddToCart}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* <div className="suggestion mt-10"></div> */}
    </div>
  );
};

export default ProductDetail;
