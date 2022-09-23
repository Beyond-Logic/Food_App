/** @format */

import React from "react";
import { useStateContext } from "../../context/StateContext";

const UserProfile = () => {
  const { logOut } = useStateContext();
  return (
    <div className="hidden md:flex sm:flex-row flex-col items-center sm:space-x-5 sm:space-y-0 space-y-1">
      <div className="flex justify-center items-center rounded-full  px-4 py-2 text-white font-extrabold bg-[#00EDDF]">
        <p>{sessionStorage.getItem("firstName").charAt(0)}</p>
      </div>
      <span className="text-sm text-[#00302E] cursor-pointer" onClick={logOut}>
        Logout
      </span>
    </div>
  );
};

export default UserProfile;
