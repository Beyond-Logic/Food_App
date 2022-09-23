/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const NavBar = () => {
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
    </div>
  );
};

export default NavBar;
