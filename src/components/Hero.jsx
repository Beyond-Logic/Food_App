/** @format */

import React from "react";
import PlayStore from "../assets/PlayStore.svg";
import AppleStore from "../assets/AppleStore.svg";
import Food1 from "../assets/Food1.svg";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col items-center mt-36 xl:space-x-36">
      <div className="xl:w-[65%] w-full">
        <h1 className="md:text-6xl text-4xl text-white leading-snug">
          Order <span className="text-[#FBDDBB]">food</span> anytime, anywhere
        </h1>
        <p className="text-lg mt-8 text-white leading-relaxed w-full lg:w-[95%]">
          Browse from our list of specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!
        </p>
        <div className="flex xs:flex-row flex-col xs:space-x-4 xs:space-y-0 space-y-4 mt-8">
          <img src={PlayStore} alt={PlayStore} className="xs:w-auto w-60" />
          <img src={AppleStore} alt={AppleStore} className="xs:w-auto w-60" />
        </div>
      </div>
      <div className="flex lg:justify-start justify-center items-center text-center ">
        <img
          src="https://res.cloudinary.com/beyondlogic/image/upload/v1667339417/Food_App/Food1_ewlybq.svg"
          alt="Food1"
          className="lg:mt-0 mt-24 m-auto md:[w-full] w-[90%]"
        />
      </div>
    </div>
  );
};

export default Hero;
