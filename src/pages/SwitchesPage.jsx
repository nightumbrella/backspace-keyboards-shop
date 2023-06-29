import React from "react";
import SwitchesFilter from "../components/SwitchesFilter";
import { UseProducts } from "../redux/ProductSlice";
import { Link } from "react-router-dom";
import { UseKeyboardsFilter } from "../redux/KeyboardsFilterSlice";
import { motion as m } from "framer-motion";

const SwitchesPage = () => {
  const { switches } = UseProducts();
  const { switchSeries } = UseKeyboardsFilter();
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
  return (
    <div className="flex gap-3">
      <SwitchesFilter />
      <div className="grid grid-cols-3 gap-2 ">
        {filteredSwitches.map((switchItem) => (
          <m.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{delay:switchItem.id * .03}}
            className="h-[415px] border rounded-md group overflow-hidden cursor-pointer"
            key={switchItem.id}
          >
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
