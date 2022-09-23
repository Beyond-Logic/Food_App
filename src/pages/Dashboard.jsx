/** @format */

import React from "react";
import {
  About,
  Cart,
  FoodItem,
  Order,
  ProductDetail,
  SideBar,
  UserProfile,
} from "../components/Dashboard";
import FoodItems from "../components/Dashboard/FoodItems";
import { useStateContext } from "../context/StateContext";

const Dashboard = ({ product }) => {
  const {
    setShowCart,

    showCart,
    showOrder,
    setShowOrder,
    showProductDetail,

    showAbout,
    setShowAbout,

    handleShowModal,
    message,
  } = useStateContext();

  return (
    <div className="h-full relative scrollbar-hide overflow-y-hidden">
      <div className="flex lg:flex-row flex-col justify-between bg-white lg:space-x-7">
        <SideBar
          handleShowCart={() => setShowCart(true)}
          handleShowOrder={() => setShowOrder(true)}
          handleShowAbout={() => setShowAbout(true)}
        />
        <div className=" bg-white pt-20 pb-20  lg:w-[76%] px-12">
          <div className="mb-20 flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-[#00302E] font-semibold">
                {message}, {sessionStorage.getItem("firstName")}
              </h1>
              <p className="text-sm font-normal mt-2 text-black opacity-70">
                What delicious meal are you craving today?
              </p>
            </div>
            <UserProfile />
          </div>
          <div className="flex justify-between text-center flex-wrap items-center">
            {FoodItems.map((product) => (
              <FoodItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {showCart && (
        <div>
          <div
            className="absolute bg-white z-30 w-[50%] h-full left-0 top-0 shadow-md bg-[#C4C4C46B] opacity-40"
            onClick={() => setShowCart(false)}
          ></div>
          <div className="bg-white z-30 ms:w-[50%] w-[80%] h-full right-0 top-0 shadow-md fixed overflow-y-scroll scrollbar-hide">
            <Cart onClick={() => setShowCart(false)} />
          </div>
        </div>
      )}

      {showOrder && (
        <div>
          <div
            className="absolute bg-white z-30 w-[50%] h-full left-0 top-0 shadow-md bg-[#C4C4C46B] opacity-40"
            onClick={handleShowModal}
          ></div>
          <div className="bg-white z-30 ms:w-[50%] w-[80%] h-full right-0 top-0 shadow-md fixed overflow-y-scroll scrollbar-hide">
            <Order onClick={handleShowModal} />
          </div>
        </div>
      )}

      {showProductDetail && (
        <div>
          <div
            className="absolute bg-white z-30 w-[50%] h-full left-0 top-0 shadow-md bg-[#C4C4C46B] opacity-40"
            onClick={handleShowModal}
          ></div>
          <div className="bg-white z-30 ms:w-[50%] w-[80%] h-full right-0 top-0 shadow-md fixed overflow-y-scroll scrollbar-hide">
            <ProductDetail product={product} onClick={handleShowModal} />
          </div>
        </div>
      )}

      {showAbout && (
        <div>
          <div
            className="absolute bg-white z-30 w-[50%] h-full left-0 top-0 shadow-md bg-[#C4C4C46B] opacity-40"
            onClick={handleShowModal}
          ></div>
          <div className="bg-white z-30 ms:w-[50%] w-[80%] h-full right-0 top-0 shadow-md fixed overflow-y-scroll scrollbar-hide">
            <About onClick={handleShowModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
