import React from "react";
import SwitchesFilter from "../components/SwitchesFilter";
import { UseProducts } from "../redux/ProductSlice";
import { Link } from "react-router-dom";
import { UseKeyboardsFilter } from "../redux/KeyboardsFilterSlice";
import { motion as m } from "framer-motion";
import { UseWishList, addWishListSwitches } from "../redux/WishListSlice";
import { useDispatch } from "react-redux";

const SwitchesPage = () => {
  const { switches } = UseProducts();
  const { switchSeries } = UseKeyboardsFilter();
  const {wishListSwitches} =UseWishList()
  const dispatch = useDispatch()
  const filteredSwitches = switches.filter((switchItem) => {
    if (
      switchSeries &&
      switchSeries.length > 0 &&
      !switchSeries.includes(switchItem.series)
    ) {
      return false;
    }
    return true;
  });
  const sendWishListKeyboards = e => {
    dispatch(addWishListSwitches(e))
  }
  return (
    <div className="flex gap-3">
      <SwitchesFilter />
      <div className="grid grid-cols-3 gap-2 ">
        {filteredSwitches.map((switchItem) => (
          <m.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{delay:switchItem.id * .03}}
            className="h-[415px] border rounded-md group overflow-hidden cursor-pointer relative"
            key={switchItem.id}
          >
            <div className="absolute w-10 h-10 bg-[#cbcbcb] z-20 rounded-full flex items-center justify-center left-2 top-2" onClick={() => sendWishListKeyboards(switchItem)}>
        {
          wishListSwitches.find(switchWishListItem => switchWishListItem.id === switchItem.id) ?  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        }
       

      </div>
            <div>
              <Link to={switchItem.name}>
                <div className="overflow-hidden h-[350px] mb-2 ">
                  <img
                    src={switchItem.thumbnail}
                    alt="thumbnail"
                    className="h-[350px] object-cover mb-1 duration-300  group-hover:scale-105 "
                  />
                </div>
                <div className="px-2 ">
                  <h2 className="flex justify-between font-semibold">
                    {switchItem.name.substring(0, 20)}
                    {switchItem.name.length > 20 ? "..." : ""}
                    <span className="bg-[#cbcbcb] px-1 py-[2px] rounded-sm">
                      ${switchItem.price}
                    </span>
                  </h2>
                  <p className="text-[#999]">{switchItem.brand}</p>
                </div>
              </Link>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default SwitchesPage;
