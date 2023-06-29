import React from "react";
import {
  UseCartSlice,
  decQTY,
  incQTY,
  removeCart,
  incQTYSwitch,
  decQTYSwitch,
  removeCartSwitch,
} from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { motion as m } from "framer-motion";

const CartPage = () => {
  const { KeyboardsList, SwitchesList } = UseCartSlice();
  const dispatch = useDispatch();
  const cartItemLength = KeyboardsList.length + SwitchesList.length;
  const boxVariants = {
    start:{
      y:100,
      opacity:0
    },
    finish:{
      y:0,
      opacity :1,
      transition:{
        staggerChildren:.1
      }
    }
  }

  const itemVariants = {
    start:{
      x:-100,
      opacity:0
    },
    finish:{
      x:0,
      opacity :1,
      animation:{
        stagerChildren:.02
      }
    }
  }
  return (
    
    <div>
      <h1 className="text-2xl pt-10 mb-5 font-extrabold text-[#999]">
        My Cart ({cartItemLength})
      </h1>
      <div className="grid grid-cols-4 pb-2">
        <h2 className="text-2xl border-b font-medium">Products</h2>
        <h2 className="text-center text-2xl border-b font-medium">Price</h2>
        <h2 className="text-center text-2xl border-b font-medium">QTY</h2>
        <h2 className="text-center text-2xl border-b pb-2 font-medium">
          Total
        </h2>
      </div>
      <div>
        {/* List product */}
        <m.div variants={boxVariants} initial="start" animate="finish" >
          {KeyboardsList.map((keyboard) => {
            const totalPrice = keyboard.price * keyboard.quantity;
            return (
              <m.div variants={itemVariants}
                key={keyboard.id}
                className="grid grid-cols-4 items-center relative"
              >
                <img
                  src={keyboard.thumbnail}
                  alt="images"
                  className="w-[100px]"
                />
                <h3 className="text-center">{keyboard.price}</h3>
                <section className="flex items-center gap-1  justify-center ">
                  <button
                    className="bg-[#aaa] rounded-full w-8 text-white flex items-center justify-center h-8 active:scale-95"
                    onClick={() => dispatch(decQTY(keyboard))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <h3 className="text-center">{keyboard.quantity}</h3>
                  <button
                    className="bg-[#aaa] rounded-full w-8 text-white flex items-center justify-center h-8 active:scale-95"
                    onClick={() => dispatch(incQTY(keyboard))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </button>
                </section>
                <h3 className="text-center">${totalPrice.toFixed(2)}</h3>
                <button
                  className=" absolute right-0 active:scale-95"
                  onClick={() => dispatch(removeCart(keyboard))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </m.div>
            );
          })}
          {SwitchesList.map((switchItem) => {
            const totalPrice = parseInt(switchItem.price) * Number(switchItem.quantity);
            return (
              <m.div variants={itemVariants}
                key={switchItem.id}
                className="grid grid-cols-4 items-center relative"
              >
                <img
                  src={switchItem.thumbnail}
                  alt="images"
                  className="w-[100px]"
                />
                <h3 className="text-center">{switchItem.price}</h3>
                <section className="flex items-center gap-1  justify-center ">
                  <button
                    className="bg-[#aaa] rounded-full w-8 text-white flex items-center justify-center h-8 active:scale-95"
                    onClick={() => dispatch(decQTYSwitch(switchItem))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <h3 className="text-center">{switchItem.quantity}</h3>
                  <button
                    className="bg-[#aaa] rounded-full w-8 text-white flex items-center justify-center h-8 active:scale-95"
                    onClick={() => dispatch(incQTYSwitch(switchItem))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </button>
                </section>
                <h3 className="text-center">${totalPrice.toFixed(2)}</h3>
                <button
                  className=" absolute right-0 active:scale-95"
                  onClick={() => dispatch(removeCartSwitch(switchItem))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </m.div>
            );
          })}
        </m.div>
      </div>
          
      <div>
      </div>
    </div>
  );
};

export default CartPage;
