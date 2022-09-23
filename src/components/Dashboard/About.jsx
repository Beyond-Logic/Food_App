/** @format */

import React from "react";
import ProfilePhoto from "../../assets/EdemaEro.jpg";

const About = ({ onClick }) => {
  return (
    <div>
      <div
        className="flex justify-end font-bold text-4xl mt-2 mr-5 cursor-pointer"
        onClick={onClick}
      >
        x
      </div>
      <div className="flex flex-col justify-center items-center lg:px-16 lg:py-14 px-10 py-8 text-center">
        <img
          src={ProfilePhoto}
          alt={ProfilePhoto}
          className="w-[50%] rounded-full"
        />
        <h2 className="mt-7 text-[#00302E] font-semibold text-2xl">
          Edema Ero
        </h2>
        <h3>Professional Frontend Developer</h3>
        <p className="mt-4 text-center text-xs font-normal text-black opacity-70 leading-loose">
          Software Engineer with a passion for frontend development who is
          looking for a challenging experience that will aid in the improvement
          of current skills and development of new ones.
        </p>
        <p className="mt-8 text-sm">
          <a
            href="https://github.com/Beyond-Logic"
            target="_blank"
            rel="noreferrer"
          >
            Github Profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
