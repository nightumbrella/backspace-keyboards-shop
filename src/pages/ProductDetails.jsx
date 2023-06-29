import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { name } = useParams();
  const { pathname } = useLocation();
  if (pathname.split("/")[1] === "switches") {
    return (
      <>
        <h1>Switches</h1>
      </>
    );
  }
  return (
    <div>
      <h1>Keyboards</h1>
    </div>
  );
};

export default ProductDetails;
