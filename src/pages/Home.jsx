/** @format */

import React from "react";
import { Footer, Hero, Main, NavBar, Newsletter } from "../components";

const Home = () => {
  return (
    <>
      <div className="lg:px-24 px-8 lg:py-14 py-8">
        <NavBar />
        <Hero />
        <Main />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
