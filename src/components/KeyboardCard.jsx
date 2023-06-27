import React from "react";
import { Link } from "react-router-dom";
import {motion as m} from 'framer-motion'

const KeyboardCard = ({ keyboard,itemVariants }) => {
  return (
    <m.div variants={itemVariants}
      className="h-[415px] border rounded-md  group overflow-hidden cursor-pointer"
    >
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
