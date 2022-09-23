/** @format */

import React from "react";

const FooterLink = ({ children }) => {
  return (
    <div className="flex flex-col space-y-4 text-sm mt-6 cursor-pointer lg:mb-0 mb-10">
      {children}
    </div>
  );
};

export default FooterLink;
