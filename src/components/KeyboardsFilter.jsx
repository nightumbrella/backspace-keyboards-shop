import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { setBrand, setColor, setConnection, setRGB, setSize } from "../redux/KeyboardsFilterSlice";

const KeyboardsFilter = () => {
  const [showBrands, setShowBrands] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const [showRGB, setShowRGB] = useState(true);
  const [showConnectivity, setShowConnectivity] = useState(true);
  const [showColor, setShowColor] = useState(true);
  const dispatch = useDispatch()

  const sendBrand = (e) => {
    dispatch(setBrand({
      isChecked:e.target.checked,
      brand:e.target.id
    }))
  }
  const sendColor = (e) => {
    dispatch(setColor({
      isChecked:e.target.checked,
      color:e.target.id
    }))
  }
  const sendSize = (e) => {
    dispatch(setSize({
      isChecked:e.target.checked,
      size:e.target.id
    }))
  }
  const sendRGB = (e) => {
    dispatch(setRGB({
      isChecked:e.target.checked,
      rgb:e.target.id
    }))
  }
  const sendconnectionType = (e) => {
    dispatch(setConnection({
      isChecked:e.target.checked,
      type:e.target.id
    }))
  }
  return (
    <div className="min-w-[350px] border rounded-md h-full p-5">
      <div>
        <h2
          className="flex items-center justify-between mb-2 cursor-pointer"
          onClick={() => setShowBrands(!showBrands)}
        >
          Brands
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 text-[#999] duration-300 ${
              showBrands ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h2>
        <AnimatePresence>
          {showBrands && (
            <m.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="border-b overflow-hidden"
            >
              <div className="container_checkbox">
                <input type="checkbox" id="Akko" onChange={sendBrand} />
                <span className="checkmark"></span>
                <label htmlFor="Akko">Akko</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="Keychron" onChange={sendBrand} />
                <span className="checkmark"></span>
                <label htmlFor="Keychron">Keychron</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="Varmilo" onChange={sendBrand}  />
                <span className="checkmark"></span>
                <label htmlFor="Varmilo">Varmilo</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="Glorious" onChange={sendBrand}  />
                <span className="checkmark"></span>
                <label htmlFor="Glorious">Glorious</label>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <h2
          className="flex items-center justify-between mb-2 cursor-pointer pt-2"
          onClick={() => setShowSize(!showSize)}
        >
          Size
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 text-[#999] duration-300 ${
              showBrands ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h2>
        <AnimatePresence>
          {showSize && (
            <m.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="border-b overflow-hidden"
            >
              <div className="container_checkbox">
                <input type="checkbox" id="Full-size" onChange={sendSize}/>
                <span className="checkmark"></span>
                <label htmlFor="Full-size">Full Size</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="60%" onChange={sendSize}/>
                <span className="checkmark"></span>
                <label htmlFor="60%">60%</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="65%" onChange={sendSize}/>
                <span className="checkmark"></span>
                <label htmlFor="65%">65%</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="1800 compact" onChange={sendSize}/>
                <span className="checkmark"></span>
                <label htmlFor="1800 compact">1800 Compact</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="75%" onChange={sendSize}/>
                <span className="checkmark"></span>
                <label htmlFor="75%">75%</label>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <h2
          className="flex items-center justify-between mb-2 cursor-pointer pt-2"
          onClick={() => setShowColor(!showColor)}
        >
          Colors/Themes
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 text-[#999] duration-300 ${
              showBrands ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h2>
        <AnimatePresence>
          {showColor && (
            <m.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="border-b overflow-hidden"
            >
              <div className="container_checkbox">
                <input type="checkbox" id="black" onChange={sendColor} />
                <span className="checkmark"></span>
                <label htmlFor="black">Black</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="white" onChange={sendColor}/>
                <span className="checkmark"></span>
                <label htmlFor="white">White</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="bluebell" onChange={sendColor}/>
                <span className="checkmark"></span>
                <label htmlFor="bluebell">Bluebell</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="demon slayer" onChange={sendColor}/>
                <span className="checkmark"></span>
                <label htmlFor="demon slayer">Demon Slayer</label>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <h2
          className="flex items-center justify-between mb-2 cursor-pointer pt-2"
          onClick={() => setShowRGB(!showRGB)}
        >
          RGB Backlit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 text-[#999] duration-300 ${
              showBrands ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h2>
        <AnimatePresence>
          {showRGB && (
            <m.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="border-b overflow-hidden"
            >
              <div className="container_checkbox">
                <input type="checkbox" id="yes" onChange={sendRGB}/>
                <span className="checkmark"></span>
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="no" onChange={sendRGB}/>
                <span className="checkmark"></span>
                <label htmlFor="no">No</label>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <h2
          className="flex items-center justify-between mb-2 cursor-pointer pt-2"
          onClick={() => setShowConnectivity(!showConnectivity)}
        >
          Connectivity
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 text-[#999] duration-300 ${
              showBrands ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h2>
        <AnimatePresence>
          {showConnectivity && (
            <m.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              <div className="container_checkbox">
                <input type="checkbox" id="Wired" onChange={sendconnectionType}/>
                <span className="checkmark"></span>
                <label htmlFor="Wired">Wired</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="Wireless" onChange={sendconnectionType} />
                <span className="checkmark"></span>
                <label htmlFor="Wireless">Wireless</label>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KeyboardsFilter;
