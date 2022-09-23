/** @format */

import React from "react";
import Meal from "./Meal";
import Pasta from "../assets/Pasta.svg";
import MeatBalls from "../assets/MeatBalls.svg";
import Burger from "../assets/Burger.svg";

const Main = () => {
  return (
    <div className="mt-44 flex flex-col text-center">
      <div className="flex flex-col justify-center text-white text-center">
        <h1 className="font-bold text-3xl text-center">
          Special Meals of the day!
        </h1>
        <p className="mt-9 md:w-[60%] m-auto leading-relaxed text-lg">
          Check our specials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center xl:space-x-40 md:space-x-20 mt-24">
        <Meal
          image={Pasta}
          title="Stir fry Pasta"
          description="Stir fry pasta yada yada yada because of Sesan"
        />
        <Meal
          image={MeatBalls}
          title="Meat Balls"
          description="Stir fry pasta yada yada yada because of Sesan"
        />
        <Meal
          image={Burger}
          title="Burger Meal"
          description="Stir fry pasta yada yada yada because of Sesan"
        />
      </div>
    </div>
  );
};

export default Main;
