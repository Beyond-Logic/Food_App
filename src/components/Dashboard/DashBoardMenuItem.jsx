/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const DashBoardMenuItem = ({
  Icon,
  name,
  itemLink,
  home = false,
  onClick,
  cartQty,
  orderQty,
}) => {
  return (
    <>
      {home ? (
        <NavLink
          to={itemLink}
          className={({ isActive }) => (isActive ? "bg-[#EFEFEF]" : "")}
          onClick={onClick}
        >
          <div className="flex space-x-2 hover:bg-[#EFEFEF] items-center rounded-md py-2 px-2 cursor-pointer">
            <img src={Icon} alt={Icon} />
            <h3>{name}</h3>
          </div>
        </NavLink>
      ) : (
        <div
          className="flex justify-between hover:bg-[#EFEFEF] items-center rounded-md py-2 px-2 cursor-pointer"
          onClick={onClick}
        >
          <div className="flex space-x-2">
            <img src={Icon} alt={Icon} />
            <h3 className="lg:pr-0 pr-3">{name}</h3>
          </div>
          <div
            className={`${
              cartQty
                ? "flex justify-center items-center rounded-full bg-[#F3C294] px-3 py-3 h-4 w-4"
                : orderQty &&
                  "flex justify-center items-center rounded-full bg-[#06E775] px-3 py-3 h-4 w-4"
            }`}
          >
            {cartQty && cartQty}
            {orderQty && orderQty}
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoardMenuItem;
