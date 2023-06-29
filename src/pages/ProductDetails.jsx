import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UseProducts } from "../redux/ProductSlice";
import { useDispatch } from "react-redux";
import { addCartKeyboard, addCartSwitch } from "../redux/CartSlice";

const ProductDetails = () => {
  const { name } = useParams();
  const { pathname } = useLocation();
  const [activeImage, setActiveImage] = useState(0)
  const dispatch = useDispatch()
  const { products, switches } = UseProducts()
  const findKeyboards = products.find(keyboard => keyboard.name === name)
  const findSwitches = switches.find(switchItem => switchItem.name === name)

  const sendKeyboardToCart = () => {
    console.log(findKeyboards)
    dispatch(
      addCartKeyboard({
        ...findKeyboards,
        quantity: 1
      })
    )
  }
  if (pathname.split("/")[1] === "switches") {
    return (
      <div >
        <h1>Switches</h1>
        <div className="flex gap-10">
          {/* Image carousel */}
          <div className="w-[500px] min-w-[500px] border overflow-hidden">
            <div className={`w-[2000px] flex mb-[1px] h-[500px] duration-300 `} style={{ transform: `translateX(-${activeImage * 500}px)` }} >
              {
                findSwitches.image.map((image) => (
                  <img key={image} src={image} alt="name image" className={`w-[500px] max-w-[500px]  object-cover max-h-[500px] h-[500px]`} />
                ))
              }
            </div>
            <div className="grid grid-cols-4 gap-[1px]">
              {
                findSwitches.image.map((image, index) => (
                  <img key={index} src={image} alt="name image" className="object-cover h-full border cursor-pointer" onClick={() => setActiveImage(index)} />
                ))
              }
            </div>
          </div>
          {/* Image carousel */}
          <div>
            <h3 className="text-5xl font-semibold">{findSwitches.name}</h3>
            <h3 className="text-2xl font-medium">{findSwitches.description}</h3>
            <div className="mb-20">
              <h3 className="flex items-center">
                {findSwitches.rating}<svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </h3>
              <h2 className="font-semibold text-xl">${findSwitches.price}</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={() => dispatch(addCartSwitch({ ...findSwitches, quantity: 1 }))} className="py-3 active:scale-95 px-2 w-[200px] bg-[#333] text-white rounded-full">
                Add to cart
              </button>
              <button className="py-3 px-2 w-[200px] bg-[#333] text-white rounded-full">Buy</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div >
      <h1>Keyboards</h1>
      <div className="flex gap-10">
        {/* Image carousel */}
        <div className="w-[500px] min-w-[500px] overflow-hidden border">
          <div className={`w-[2000px] flex mb-[1px] h-[500px]  duration-300 `} style={{ transform: `translateX(-${activeImage * 500}px)` }} >
            {
              findKeyboards.images.map((image) => (
                <img key={image} src={image} alt={`name image" className=" w-[500px]  max-w-[500px] object-cover max-h-[500px] h-[500px]`} />
              ))
            }
          </div>
          <div className="grid grid-cols-4 gap-[1px]">
            {
              findKeyboards.images.map((image, index) => (
                <img key={image} src={image} alt="name image" className="object-cover h-full border cursor-pointer" onClick={() => setActiveImage(index)} />
              ))
            }
          </div>
        </div>
        {/* Image carousel */}
        <div>
          <h3 className="text-5xl font-semibold">{findKeyboards.name}</h3>
          <h3 className="text-2xl font-medium">{findKeyboards.description}</h3>
          <div className="mb-20">
            <h3 className="flex items-center">
              {findKeyboards.rating}<svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </h3>
            <h2 className="font-semibold text-xl">${findKeyboards.price}</h2>
          </div>
          <div className="flex gap-3">
            <button onClick={sendKeyboardToCart} className="py-3 px-2 w-[200px] bg-[#333] text-white rounded-full active:scale-95">
              Add to cart
            </button>
            <button className="py-3 px-2 w-[200px] bg-[#333] text-white rounded-full">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
