/** @format */

import React from "react";
import FooterLink from "./FooterLink";
import PlayStoreFooter from "../assets/PlayStoreFooter.svg";
import AppStoreFooter from "../assets/AppStoreFooter.svg";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex md:flex-row flex-col justify-between  bg-[#0B0D17] text-white lg:px-24 px-8 lg:py-16 py-8">
        <div>
          <h1 className="text-lg font-medium">Company</h1>
          <FooterLink>
            <h4>About Us</h4>
            <h4>Careers</h4>
            <h4>Contact Us</h4>
          </FooterLink>
        </div>
        <div>
          <h1 className="text-lg font-medium">Support</h1>
          <FooterLink>
            <h4>Help Center</h4>
            <h4>Safety Center</h4>
          </FooterLink>
        </div>
        <div>
          <h1 className="text-lg font-medium">Legal</h1>
          <FooterLink>
            <h4>Cookies Policy</h4>
            <h4>Privacy Policy</h4>
            <h4>Terms of Service</h4>
            <h4>Dispute Resolution</h4>
          </FooterLink>
        </div>
        <div>
          <h1 className="text-lg font-medium">Install App</h1>
          <FooterLink>
            <img
              src={PlayStoreFooter}
              alt={PlayStoreFooter}
              className="md:w-full w-40"
            />
            <img
              src={AppStoreFooter}
              alt={AppStoreFooter}
              className="md:w-full w-40"
            />
          </FooterLink>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
