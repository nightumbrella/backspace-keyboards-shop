import React from "react";
import { UseProducts } from "../redux/ProductSlice";
import keyboardImg from "../assets/keyboardHome.webp";
import switchImg from "../assets/switchHome.jpg";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const HomePage = () => {
  const { products, switches } = UseProducts();
  const BoxVariants = {
    start: {
      opacity: 0,
    },
    finish: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };
  const itemVariants = {
    start: {
      y: 100,
      opacity: 0,
    },
    finish: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <m.div
        variants={BoxVariants}
        initial="start"
        animate="finish"
        className="flex items-center gap-2 mb-5"
      >
        <m.section
          variants={itemVariants}
          className="flex-1 rounded-md relative overflow-hidden group"
        >
          <Link to={"keyboards"}>
            <h1 className="z-10 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-4xl opacity-0 group-hover:opacity-100 duration-300 backdrop-blur-md w-full text-center py-2">
              Explore Keyboards
            </h1>
            <img
              src={keyboardImg}
              alt="keyboardImg"
              className="h-[300px] object-cover w-full group-hover:scale-105 duration-300"
            />
          </Link>
        </m.section>
        <m.section
          variants={itemVariants}
          className="flex-1 relative overflow-hidden group"
        >
          <Link to={"switches"}>
            <h1 className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-4xl opacity-0 group-hover:opacity-100 duration-300 backdrop-blur-md w-full text-center py-2 z-10">
              Explore Switches
            </h1>
            <img
              src={switchImg}
              alt="keyboardImg"
              className="h-[300px] object-cover w-full group-hover:scale-105 duration-300"
            />
          </Link>
        </m.section>
      </m.div>

      <m.div
        variants={BoxVariants}
        initial="start"
        animate="finish"
        className="grid grid-cols-4 gap-2"
      >
        {products.map((product) => (
          <React.Fragment key={product.id}>
            {product.new_arrivals ? (
              <m.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: product.id * 0.02 }}
                className="rounded-md overflow-hidden group relative "
              >
                <Link>
                <h3 className="absolute  top-2/4 text-white z-10 text-xl opacity-0 group-hover:opacity-100 duration-300 -translate-y-2/4 backdrop-blur-md py-2 w-full text-center ">{product.name}</h3>
                  <img
                    src={product.newImage}
                    alt="newImage"
                    className="h-[400px] object-cover group-hover:scale-105 duration-300"
                  />
                </Link>
              </m.div>
            ) : null}
          </React.Fragment>
        ))}
      </m.div>
    </div>
  );
};

export default HomePage;
