/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { useStateContext } from "../context/StateContext";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const NavBar = () => {
  const { showMobileMenuLanding, setShowMobileMenuLanding } = useStateContext();

  return (
    <div className="flex justify-between">
      <div>
        <div className="flex space-x-4 justify-center items-end">
          <img
            src={Logo}
            alt="Lilies Food App"
            className="md:w-14 md:h-16 w-10"
          />

          <h1 className="font-bold text-white md:text-3xl text-2xl leading-normal tracking-wider">
            Lilies{" "}
          </h1>
        </div>
      </div>
      <div className="md:flex hidden">
        <div className="flex space-x-11 text-white text-xl items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#FBDDBB]" : "text-white  hover:text-[#FBDDBB]"
            }
          >
            {" "}
            <h4>Home</h4>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-[#FBDDBB]" : "text-white hover:text-[#FBDDBB]"
            }
          >
            <h4>Login</h4>
          </NavLink>
          <Link to="/signup">
            <div className="bg-[#E2B887] px-6 py-2 rounded-md text-[#00302E] cursor-pointer">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute top-11 right-8">
        <div onClick={() => setShowMobileMenuLanding(true)}>
          <AiOutlineMenu size={30} color="white" />
        </div>
      </div>
      <div>
        {showMobileMenuLanding && (
          <div className=" absolute top-0 right-0 flex flex-col  text-white text-xl items-center z-10 bg-[#00302E] px-10 py-10 space-y-8 shadow-lg w-[100%]">
            <div
              className="absolute top-11 right-8 text-3xl cursor-pointer"
              onClick={() => setShowMobileMenuLanding(false)}
            >
              <AiOutlineCloseCircle size={30} />
            </div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#FBDDBB]" : "text-white  hover:text-[#FBDDBB]"
              }
            >
              {" "}
              <h4>Home</h4>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-[#FBDDBB]" : "text-white hover:text-[#FBDDBB]"
              }
            >
              <h4>Login</h4>
            </NavLink>
            <Link to="/signup">
              <div className="bg-[#E2B887] px-6 py-2 rounded-md text-[#00302E] cursor-pointer">
                Sign Up
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
