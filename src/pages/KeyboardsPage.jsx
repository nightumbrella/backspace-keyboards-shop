import React from "react";
import KeyboardsFilter from "../components/KeyboardsFilter";
import { UseProducts } from "../redux/ProductSlice";
import { Link } from "react-router-dom";
const KeyboardsPage = () => {
  const { products } = UseProducts();
  console.log(products);
  return (
    <div className="flex gap-2">
      <KeyboardsFilter />
      <div className="grid grid-cols-3 gap-2">
        {products.map((keyboard) => (
          <div className="h-[410px] border rounded-md  group overflow-hidden cursor-pointer" key={keyboard.id}>
            <Link to={keyboard.name}>
              <div className="overflow-hidden h-[350px] ">
                <img
                  src={keyboard.thumbnail}
                  alt="keyboards"
                  className="h-[350px] object-cover mb-1 duration-300  group-hover:scale-105"
                />
              </div>
              <div className="px-2 ">
                <h2 className="flex justify-between">
                  {keyboard.name.substring(0, 20)}
                  {keyboard.name.length > 20 ? "..." : ""}
                  <span className="bg-[#999] px-1 py-[2px] rounded-sm">
                    ${keyboard.price}
                  </span>
                </h2>
                <p>{keyboard.brand}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardsPage;
