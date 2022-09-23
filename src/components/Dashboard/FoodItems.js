/** @format */
import Food1 from "../../assets/FoodItems/Food1.svg";
import Food2 from "../../assets/FoodItems/Food2.svg";
import Food3 from "../../assets/FoodItems/Food3.svg";
import Food4 from "../../assets/FoodItems/Food4.svg";
import Food5 from "../../assets/FoodItems/Food5.svg";
import Food6 from "../../assets/FoodItems/Food6.svg";

import uuid from "react-uuid";

const FoodItems = [
  {
    _id: uuid(),
    image: Food1,
    name: "Hamburger",
    description: "The in-house pasta and chicken by chef Moose",
    detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.
    `,
    price: 500,
    quantity: 10,
    cookingTime: "10-20 Mins",
    packsAvailable: 25,
  },
  {
    _id: uuid(),
    image: Food2,
    name: "Stir Noodles Fry Pasta",
    description: "The in-house pasta and chicken by chef Moose",
    detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 2000,
    quantity: 10,
    cookingTime: "30 - 50 Mins",
    packsAvailable: 15,
  },
  {
    _id: uuid(),
    image: Food3,
    name: "Noodles Fry Pasta",
    description: "The in-house pasta and chicken by chef Moose",
    detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 3000,
    quantity: 10,
    cookingTime: "10-35 Mins",
    packsAvailable: 4,
  },
  {
    _id: uuid(),
    image: Food4,
    name: "Stir Fry Pasta",
    description: "The in-house pasta and chicken by chef Moose",
    detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 1800,
    cookingTime: "10-40 Mins",
    packsAvailable: 30,
  },
  {
    _id: uuid(),
    image: Food5,
    name: "Baked Fruit Bread",
    description: "The in-house pasta and chicken by chef Moose",
    detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 2000,
    quantity: 10,
    cookingTime: "10-20 Mins",
    packsAvailable: 5,
  },
  {
    _id: uuid(),
    image: Food6,
    name: "Spicy Hot Soup",
    description: "The in-house pasta and chicken by chef Moose",
    detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 4500,
    quantity: 10,
    cookingTime: "10 - 40 Mins",
    packsAvailable: 10,
  },
];

export default FoodItems;
