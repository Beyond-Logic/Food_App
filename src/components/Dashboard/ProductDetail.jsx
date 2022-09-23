/** @format */

import React from "react";
import { useStateContext } from "../../context/StateContext";
import DecreaseQty from "../../assets/DecreaseQty.svg";
import IncreaseQty from "../../assets/IncreaseQty.svg";

const ProductDetail = ({ onClick }) => {
  const { decQty, incQty, qty, onAdd, showProductDetailData } =
    useStateContext();

  const { image, name, detailDescription, price, cookingTime, packsAvailable } =
    showProductDetailData;

  return (
    <div>
      <div
        className="flex justify-end font-bold text-4xl mt-2 mr-5 cursor-pointer"
        onClick={onClick}
      >
        x
      </div>
      <div className="flex flex-col justify-center items-center lg:px-16 lg:py-14 px-10 py-8">
        <img src={image} alt={image} className="lg:w-[230px]" />
        <h2 className="mt-7 text-[#00302E] font-semibold text-lg">{name}</h2>
        <p className="mt-4 text-center text-xs font-normal text-black opacity-70 leading-loose">
          {detailDescription}
        </p>
        <div className="flex items-center lg:space-x-28 space-x-4 mt-10 font-semibold text-[#00302E] lg:text-base text-sm">
          <h4>₦{price}</h4>
          <h4>{cookingTime}</h4>
          <h4>{packsAvailable} Pcs Avail</h4>
        </div>
        <div className="flex justify-between items-center lg:space-x-32 space-x-4 mt-12">
          <div className="flex space-x-4 items-center">
            <div onClick={decQty} className="cursor-pointer">
              <img src={DecreaseQty} alt={DecreaseQty} />
            </div>
            <div>
              <h3 className="text-3xl text-[#00302E] font-semibold">{qty}</h3>
            </div>
            <div onClick={incQty} className="cursor-pointer">
              <img src={IncreaseQty} alt={IncreaseQty} />
            </div>
          </div>
          <div>
            <button
              className="bg-[#00302E] text-[#FBFBFB] font-semibold text-sm lg:py-5 lg:px-16 px-4 py-2"
              onClick={() => onAdd(showProductDetailData, qty)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
