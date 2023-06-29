import React from "react";
import KeyboardsFilter from "../components/KeyboardsFilter";
import { UseProducts } from "../redux/ProductSlice";
import { Link } from "react-router-dom";
import { UseKeyboardsFilter } from "../redux/KeyboardsFilterSlice";
import { motion as m } from "framer-motion";
import KeyboardCard from "../components/KeyboardCard";

const KeyboardsPage = () => {
  const { products } = UseProducts();
  const { brands, colors, sizes, RGB, connection } = UseKeyboardsFilter();

  const filteredKeyboards = products.filter((product) => {
    if (brands && brands.length > 0 && !brands.includes(product.brand)) {
      return false;
    }
    if (colors && colors.length > 0 && !colors.includes(product.color)) {
      return false;
    }
    if (sizes && sizes.length > 0 && !sizes.includes(product.layout)) {
      return false;
    }
    if (RGB && RGB.length > 0 && !RGB.includes(product.backlighting_RGB)) {
      return false;
    }
    if (connection && connection.length > 0 && !connection.includes(product.connection)) {
      return false;
    }
    return true;
  });

  const boxVariants = {
    start:{
      opacity:0
    },
    finish:{
      opacity:1,
      transition:{
        staggerChildren:.03
      }
    }
  }
  const itemVariants ={
    start:{
      opacity:0,
      y:100
    },
    finish:{
      opacity:1,
      y:0
    }
  }

  return (
    <div className="flex gap-2">
      <KeyboardsFilter />
      <m.div variants={boxVariants} initial="start" animate="finish" className="grid grid-cols-3 gap-2">
        {filteredKeyboards.map((keyboard) => (
          <React.Fragment key={keyboard.id}>
            <KeyboardCard keyboard={keyboard} itemVariants={itemVariants} />
          </React.Fragment>
        ))}
      </m.div>
    </div>
  );
};

export default KeyboardsPage;
