import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

const KeyboardsFilter = () => {
  const [showBrands, setShowBrands] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const [showRGB, setShowRGB] = useState(true);
  const [showConnectivity, setShowConnectivity] = useState(true);
  const [showColor, setShowColor] = useState(true);
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
                <input type="checkbox" id="Akko" />
                <span className="checkmark"></span>
                <label htmlFor="Akko">Akko</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="Keychron" />
                <span className="checkmark"></span>
                <label htmlFor="Keychron">Keychron</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="Varmilo" />
                <span className="checkmark"></span>
                <label htmlFor="Varmilo">Varmilo</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="Glorious" />
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
                <input type="checkbox" id="full-size" />
                <span className="checkmark"></span>
                <label htmlFor="full-size">Full Size</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="60%" />
                <span className="checkmark"></span>
                <label htmlFor="60%">60%</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="65%" />
                <span className="checkmark"></span>
                <label htmlFor="65%">65%</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="1800 Compact" />
                <span className="checkmark"></span>
                <label htmlFor="1800 Compact">1800 Compact</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="75%" />
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
                <input type="checkbox" id="Black" />
                <span className="checkmark"></span>
                <label htmlFor="Black">Black</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="White" />
                <span className="checkmark"></span>
                <label htmlFor="White">White</label>
              </div>
              <div className="container_checkbox">
                <input type="checkbox" id="Bluebell" />
                <span className="checkmark"></span>
                <label htmlFor="Bluebell">Bluebell</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="Demon Slayer" />
                <span className="checkmark"></span>
                <label htmlFor="Demon Slayer">Demon Slayer</label>
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
                <input type="checkbox" id="Yes" />
                <span className="checkmark"></span>
                <label htmlFor="Yes">Yes</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="No" />
                <span className="checkmark"></span>
                <label htmlFor="No">No</label>
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
                <input type="checkbox" id="Wired" />
                <span className="checkmark"></span>
                <label htmlFor="Wired">Wired</label>
              </div>
              <div className="container_checkbox mb-1">
                <input type="checkbox" id="Wireless" />
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
