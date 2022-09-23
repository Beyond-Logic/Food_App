/** @format */

import React from "react";
import { PaystackButton } from "react-paystack";
import { useStateContext } from "../context/StateContext";

const PayStack = ({ disabled = false }) => {
  const { componentProps } = useStateContext();

  return (
    <>
      <PaystackButton
        {...componentProps}
        className={` w-full bg-[#00302E] text-sm font-semibold text-[#F3C294] py-5 rounded-md ${
          disabled ? "bg-[#00302E]" : " bg-[#215e5c] pointer-events-none"
        } py-4 px-4 text-lg rounded-sm mb-10 text-[#FBDDBB]`}
      />
    </>
  );
};

export default PayStack;
