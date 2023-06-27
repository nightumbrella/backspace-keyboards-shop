import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split("/").filter((crumb) => crumb !== "");
  return (
    <div className="h-[50px] mb-5 flex items-center">
      {crumbs.length === 0 ? null : (
        <Link to={"/"} className="crumb">
          Home
        </Link>
      )}
      {crumbs.map((crumb) => {
        const productName = crumb.split("%").join(" ");
        return (
          <React.Fragment key={crumb}>
            {pathname.split("%") ? (
              <Link className="crumb">{productName}</Link>
            ) : (
              <Link to={crumb} className="crumb">
                {crumb}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
