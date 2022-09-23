/** @format */

import React from "react";

const Newsletter = () => {
  return (
    <div className="flex xl:flex-row flex-col mt-64 items-center mb-48 xl:space-x-20 m-auto xl:text-left text-center">
      <div className="xl:w-[90%] m-auto">
        <h2 className="md:text-3xl text-2xl leading-normal text-[#FBDDBB]">
          Get notified when we update!
        </h2>
        <p className="text-base text-white lg:w-[90%] md:px-0  leading-relaxed mt-10">
          Get notified when we add new items to our specials menu, update our
          price list of have promos!
        </p>
      </div>
      <div className="mt-8 sm:w-full w-[95%] m-auto">
        <div className="flex md:flex-row flex-col md:space-x-2 items-center justify-center ">
          <input
            type="email"
            placeholder="gregphillips@gmail.com"
            className="rounded-md px-4 py-1 h-[51px]"
          />
          <button className="bg-[#FBDDBB] py-4 text-sm rounded-md h-[51px] flex items-center md:mt-0 mt-4 justify-center">
            <span className="xl:w-[200px] w-[280px] font-medium text-[#00302E] leading-relaxed text-center">
              Get notified
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
