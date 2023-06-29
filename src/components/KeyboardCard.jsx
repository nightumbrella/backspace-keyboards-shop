import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from 'framer-motion'
import { UseWishList, addWishListKeyboards } from "../redux/WishListSlice";
import {useDispatch} from 'react-redux'

const KeyboardCard = ({ keyboard, itemVariants }) => {
  const { wishListKeyboards } = UseWishList()
  const sendWishListKeyboards = e => {
    console.log(e)
    dispatch(addWishListKeyboards(e))
  }
  const dispatch = useDispatch()
  return (
    <m.div variants={itemVariants}
      className="h-[415px] relative border rounded-md  group overflow-hidden cursor-pointer"
    >
      <div className="absolute w-10 h-10 bg-[#cbcbcb] z-20 rounded-full flex items-center justify-center left-2 top-2" onClick={() => sendWishListKeyboards(keyboard)}>
        {
          wishListKeyboards.find(keyboardItem => keyboardItem.id === keyboard.id) ?  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        }
       

      </div>
      <Link to={keyboard.name}>
        <div className="overflow-hidden h-[350px] mb-2 ">
          <img
            src={keyboard.thumbnail}
            alt="keyboards"
            className="h-[350px] object-cover mb-1 duration-300  group-hover:scale-105"
          />
        </div>
        <div className="px-2 ">
          <h2 className="flex justify-between font-semibold">
            {keyboard.name.substring(0, 20)}
            {keyboard.name.length > 20 ? "..." : ""}
            <span className="bg-[#cbcbcb] px-1 py-[2px] rounded-sm">
              ${keyboard.price}
            </span>
          </h2>
          <p className="text-[#999]">{keyboard.brand}</p>
        </div>
      </Link>
    </m.div>
  );
};

export default KeyboardCard;
