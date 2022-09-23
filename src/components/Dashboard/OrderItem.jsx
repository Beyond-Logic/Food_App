/** @format */

import React from "react";

const OrderItem = ({
  CartItemImage,
  name,
  price,
  quantity,
  reMove,
  orderStatus,
  orderStatusText,
}) => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between justify-start lg:items-center lg:space-y-0 space-y-4 mt-8 mb-12">
      <div className="flex lg:w-[50%] ms:space-x-4 space-x-10 justify-start items-center">
        <div>
          <img
            src={CartItemImage}
            alt={CartItemImage}
            className="rounded-full lg:w-[60px] lg:h-[60%] w-[50px] h-[50px]"
          />
        </div>
        <div>
          <p className="font-bold xl:text-lg text-[#00302E] lg:w-[80%]">
            {name}
          </p>
          <p
            className="text-xs text-[#C92C33] font-medium cursor-pointer"
            onClick={reMove}
          >
            Remove
          </p>
          <div className="flex flex-row xl:hidden space-x-4 items-center  mt-2 lg:w-[25%] ">
            <div className="flex space-x-4 items-center border-[0.5px] px-2 border-[#00302E] rounded-sm justify-center w-fit">
              <p className="text-lg font-bold text-[#00302E]">{quantity}</p>
            </div>
            <div>
              <p className="text-sm text-[#000000] opacity-70">Qty</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex space-x-4 items-center lg:w-[25%]">
        <div className="flex space-x-4 items-center px-2 rounded-sm justify-center w-fit">
          <p className="text-lg font-bold text-[#00302E]">{quantity}</p>
        </div>
      </div>

      <div className="flex xl:space-x-4 space-x-8 items-center lg:w-[25%]">
        <div>
          <p className="xl:text-lg font-bold text-[#00302E]">₦{price}</p>
          <span className="flex flex-col xl:hidden text-xs text-[#000000] opacity-70">
            Price
          </span>
        </div>
      </div>
      <h5 className={orderStatus}>{orderStatusText}</h5>
    </div>
  );
};

export default OrderItem;
