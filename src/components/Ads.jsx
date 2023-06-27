import React, { useState } from "react";
import { Link } from "react-router-dom";

const Ads = () => {
  const [closeAd, setCloseAd] = useState(false);
  return (
    <>
      {!closeAd && (
        <div className="bg-[#1d242d] h-[40px] text-white flex justify-center items-center gap-24">
          <h3 className="flex items-center gap-5">
            Sign up and GET 20% OFF you first order.
            <Link className="border-b">Sign Up Now</Link>
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setCloseAd(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Ads;
