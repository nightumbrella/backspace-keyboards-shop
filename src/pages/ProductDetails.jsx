import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UseProducts } from "../redux/ProductSlice";

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const { name } = useParams();
  const { products } = UseProducts();
  const findKeyboards = products.find((keyboard) => keyboard.name === name);
  return (
    <div className="flex gap-5">
      <div className="min-w-[500px]">
        <div className="w-[500px] h-[500px] mb-2 overflow-hidden border">
          <div
            className="w-[2000px] flex max-h-[500px] mb-2 duration-300 "
            style={{ transform: `translateX(-${activeImage * 500}px)` }}
          >
            {findKeyboards.images.map((image) => (
              <img
                src={image}
                alt=""
                className=" w-[500px] min-h-[500px] object-cover"
              />
            ))}
          </div>
        </div>
        <div className="max-w-[500px] overflow-hidden grid grid-cols-4">
          {findKeyboards.images.map((image, index) => (
            <img
              src={image}
              alt=""
              className="border object-cover cursor-pointer h-full "
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div>

      <div className="border w-[500px]">
        <h1 className="text-3xl font-semibold">{findKeyboards.name}</h1>
        <h3 className="text-6xl text-center">Soon</h3>
      </div>

      <div className="border w-[500px] px-10 relative">
        <h1 className="text-4xl font-semibold py-2">About this Product</h1>
        <p className="py-2">
          <span className="text-xl font-medium">Info:</span> Lorem ipsum dolor
          sit amet.
        </p>
        <p className="py-2">
          <span className="text-xl font-medium">Info:</span> Lorem ipsum dolor
          sit amet.
        </p>
        <p className="py-2">
          <span className="text-xl font-medium">Info:</span> Lorem ipsum dolor
          sit amet.
        </p>
        <p className="py-2">
          <span className="text-xl font-medium">Info:</span> Lorem ipsum dolor
          sit amet.
        </p>
        <p className="py-2">
          <span className="text-xl font-medium">Info:</span> Lorem ipsum dolor
          sit amet.
        </p>
        <div className="absolute bottom-2 left-5 right-5 max-w-[460px]">
          <button className="w-full bg-[#353535] text-white border rounded-md py-2 active:scale-95">
            Add to Cart
          </button>
          <button className="w-full bg-[#353535] text-white border rounded-md py-2 active:scale-95">
            Add Wishlist
          </button>
          <button className="w-full bg-[#353535] text-white border rounded-md py-2 active:scale-95">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
