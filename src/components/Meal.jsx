/** @format */

import React from "react";

const Meal = ({ image, title, description }) => {
  return (
    <div className="flex flex-col justify-center md:mt-0 mb-16">
      <img
        src={image}
        alt={image}
        className="rounded-full m-auto"
        width="250px"
        height="250px"
      />
      <h2 className="text-3xl text-[#FBDDBB] mt-9">{title}</h2>
      <p className="text-sm mt-4 text-white lg:w-[80%] w-full m-auto">
        {description}
      </p>
    </div>
  );
};

export default Meal;
