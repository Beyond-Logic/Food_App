/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AuthContainer = ({
  LoginSignUpBg,
  title,
  titleLink,
  children,
  buttonText,
  SignUpText,
  ForgotPasswordText,
  signUp = false,
  login = false,
  showPassword,
  showText,
  onSubmit,
  disabled,
}) => {
  const { setShowMobileMenuLanding, show } = useStateContext();
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center lg:bg-[#FBDDBB] bg-white lg:h-screen lg:py-0 h-full pt-24">
      <div
        className="flex-1 lg:flex hidden"
        style={{
          backgroundImage: `url(${LoginSignUpBg})`,
          backgroundPosition: "right top",
          height: "100%",
          width: "100%",
          opacity: "0.4",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bg-white md:flex-1  w-full flex flex-col items-center justify-center md:mt-0 h-full">
        <div className="flex flex-col justify-center text-center w-full md:px-20 px-12 lg:py-0 py-20 md:mt-10 lg:mt-10 ">
          <h1
            className="text-2xl font-semibold mb-14 text-[#00302E] cursor-pointer "
            onClick={() => setShowMobileMenuLanding(false)}
          >
            <Link to={titleLink}>{title}</Link>
          </h1>
          {children}
          <div className="relative">
            <div className={showText} onClick={showPassword}>
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          <button
            disabled={disabled}
            className={`${
              disabled ? "bg-[#215e5c]" : "bg-[#00302E]"
            } py-4 px-4 text-lg rounded-sm mb-10 text-[#FBDDBB]`}
            onClick={onSubmit}
          >
            {buttonText}
          </button>
          {login && (
            <div className="flex justify-between text-sm text-[#00302EE8] opacity-90 lg:mb-4">
              <div className="hover:opacity-100">
                <Link to="/signup">
                  <p className="cursor-pointer">{SignUpText}</p>
                </Link>
              </div>
              <div>
                <p className="cursor-pointer">{ForgotPasswordText}</p>
              </div>
            </div>
          )}
          {signUp && (
            <div className="text-[#00302EE8] opacity-90 hover:opacity-100 lg:mb-4 ">
              Already have an account.{" "}
              <Link to="/login">
                <span className="font-bold">LOGINs</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
