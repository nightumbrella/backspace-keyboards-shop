import React from "react";
import KeyboardsImage from "../assets/keyboards/keyboards2.webp";
import KeyCap from "../assets/keycap.jpg";
import SwitchImage from "../assets/switchHome.jpg";
import MouseImage from "../assets/mouse.jpg";
import MousePad from "../assets/mouse pad.jpg";
import { Link } from "react-router-dom";
import { motion as m} from "framer-motion";

const boxVariants = {
  start:{
    y:100,opacity:0
  },
  finish:{
    y:0,opacity:1,
    transition:{
      staggerChildren:.05
    }
  }
}
const itemVariants = {
  start:{
    y:100,opacity:0
  },
  finish:{
    y:0,opacity:1,
  }
}

const ShopCategory = ({toggleShopCategory}) => {
  return (
    <m.div variants={boxVariants} initial="start" animate="finish" className="absolute left-0 right-0 top-0 bottom-0 h-screen w-screen bg-[#1d242d] z-50 p-20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
      className="w-8 -translate-x-2/4 cursor-pointer h-8 absolute top-8 left-2/4 text-white " onClick={toggleShopCategory}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>

      <div className="bg-[#35404e] h-full w-full rounded-md overflow-hidden grid grid-rows-2 grid-cols-4 p-2 gap-2">
        <m.div variants={itemVariants} className="group row-span-2 rounded-md overflow-hidden relative">
          <Link to={"/"}onClick={toggleShopCategory}>
            <h2 className="text-center absolute top-2/4 -translate-y-2/4 z-10 text-white w-full backdrop-blur-md py-2 text-3xl opacity-0 group-hover:opacity-100 duration-300 ease-out">
              KeyCaps
            </h2>
            <img
              src={KeyCap}
              alt="KeyCap"
              className="h-full w-full object-cover group-hover:scale-105 duration-300 "
            />
          </Link>
        </m.div>
        <m.div variants={itemVariants} className="col-span-2 rounded-md overflow-hidden relative group">
          <Link to={'/keyboards'} onClick={toggleShopCategory}>
            <h2 className="text-center absolute top-2/4 -translate-y-2/4 z-10 text-white w-full backdrop-blur-md py-2 text-3xl opacity-0 group-hover:opacity-100 duration-300 ease-out">
              Keyboards
            </h2>
            <img
              src={KeyboardsImage}
              alt="KeyboardsImage"
              className="w-full h-full object-cover group-hover:scale-105 duration-300  "
            />
          </Link>
        </m.div>
        <m.div variants={itemVariants} className="rounded-md overflow-hidden group relative">
          <Link to={"/"} onClick={toggleShopCategory}>
            <h2 className="text-center absolute top-2/4 -translate-y-2/4 z-10 text-white w-full backdrop-blur-md py-2 text-3xl opacity-0 group-hover:opacity-100 duration-300 ease-out">
              Mouses
            </h2>
            <img src={MouseImage} alt="MouseImage" className="w-full h-full object-cover group-hover:scale-105 duration-300" />
          </Link>
        </m.div>
        <m.div variants={itemVariants} className="rounded-md overflow-hidden relative group">
          <Link to={'/'} onClick={toggleShopCategory}>
            <h2 className="text-center absolute top-2/4 -translate-y-2/4 z-10 text-white w-full backdrop-blur-md py-2 text-3xl opacity-0 group-hover:opacity-100 duration-300 ease-out">
              Mouse Pad
            </h2>
            <img src={MousePad} alt="MouMousePadseImage" className="w-full h-full object-cover group-hover:scale-105 duration-300" />
          </Link>
        </m.div>
        <m.div variants={itemVariants} className="col-span-2 rounded-md overflow-hidden group relative">
          <Link to={'/switches'} onClick={toggleShopCategory}>
            <h2 className="text-center absolute top-2/4 -translate-y-2/4 z-10 text-white w-full backdrop-blur-md py-2 text-3xl opacity-0 group-hover:opacity-100 duration-300 ease-out">
              Switches
            </h2>
            <img src={SwitchImage} alt="SwitchImage" className="w-full h-full object-cover group-hover:scale-105 duration-300" />
          </Link>
        </m.div>
      </div>
    </m.div>
  );
};

export default ShopCategory;
