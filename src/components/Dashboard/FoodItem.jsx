/** @format */

import React from "react";
import { useStateContext } from "../../context/StateContext";

const FoodItem = ({ product }) => {
  const { image, name, description, price } = product;
  const { setShowProductDetail, setShowProductDetailData } = useStateContext();

  const handleShowProductDetail = () => {
    setShowProductDetail(true);
    setShowProductDetailData(product);
  };
  return (
    <div
      className="flex-col justify-center items-center flex hover:shadow-lg hover:rounded-xl py-8  md:w-[45%] xl:w-[28%]  mb-16 cursor-pointer m-auto"
      onClick={handleShowProductDetail}
    >
      <img src={image} alt={image} className="rounded-full" />
      <h2 className="mt-3 text-[#00302E] text-lg font-semibold">{name}</h2>
      <p className="text-xs text-black opacity-70 lg:px-10 sm:px-16 px-10 mt-2">
        {description}
      </p>
      <div className="flex space-x-12 text-sm mt-6">
        <p className="font-bold text-[#00302E]">N {price}</p>
        <p
          className="font-medium text-[#06E775] cursor-pointer"
          onClick={handleShowProductDetail}
        >
          Add to Cart
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
