/** @format */

import React, { useRef } from "react";
import { useStateContext } from "../../context/StateContext";
import CartItem from "./CartItem";
import PayStack from "../../api/PayStack";

const Cart = ({ onClick }) => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
    validateEmail,
  } = useStateContext();

  console.log(cartItems);

  const sessionFirstName = sessionStorage.getItem("firstName");
  const sessionEmail = sessionStorage.getItem("email");
  const sessionKey = sessionStorage.getItem("key");

  return (
    <div className="px-12" ref={cartRef}>
      <div
        className="mt-14 flex space-x-3 items-center cursor-pointer"
        onClick={onClick}
      >
        <h2 className="font-semibold text-[#00302E] text-lg">
          {`< Your Cart`}
        </h2>
        <p>{totalQuantities > 0 ? totalQuantities : 0} Items</p>
      </div>
      {cartItems?.length < 1 && (
        <div className="flex flex-col justify-center items-center text-center mt-32">
          <h3 className="text-3xl text-[#00302E]]">
            Your shopping bag is empty
          </h3>

          <button
            type="button"
            onClick={() => setShowCart(false)}
            className="w-full bg-[#00302E] text-sm font-semibold text-[#F3C294] py-5 mt-10 rounded-md"
          >
            Continue Shopping
          </button>
        </div>
      )}

      <div>
        {cartItems?.length >= 1 && (
          <div className="hidden xl:flex  justify-start mt-6 text-sm text-[#000000] opacity-70">
            <h5 className="w-[55%]">Item</h5>

            <h5 className="flex-1">Qty</h5>

            <h5 className="flex-1 ml-14">Price</h5>

            <h5 className="flex-1 ml-14">Status</h5>
          </div>
        )}

        {cartItems?.length >= 1 &&
          cartItems.map((item) => (
            <CartItem
              key={item?._id}
              CartItemImage={item?.image}
              quantity={item?.quantity}
              name={item?.name}
              price={item?.price}
              decQuantity={() => toggleCartItemQuantity(item?._id, "dec")}
              incQuantity={() => toggleCartItemQuantity(item?._id, "inc")}
              reMove={() => onRemove(item)}
            />
          ))}

        {cartItems?.length >= 1 && (
          <>
            <div className="flex justify-end items-center space-x-7 mb-10">
              <span className="text-[#000000B0] opacity-70 text-base">
                Total:
              </span>
              <h4 className="text-[#00302E] text-xl font-bold">
                ₦{totalPrice}
              </h4>
            </div>
            <div className="mb-10">
              <PayStack
                disabled={
                  sessionFirstName || validateEmail(sessionEmail) || sessionKey
                    ? true
                    : false
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
