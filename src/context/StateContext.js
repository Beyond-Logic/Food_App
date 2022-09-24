/** @format */

import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(true);

  const getLocalStorage = (name) => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem(name);

      if (storage) return JSON.parse(localStorage.getItem(name));

      if (name === "cartItems") return [];
      if (name === "orderItems") return [];

      return 0;
    }
  };

  const [email, setEmail] = useState(getLocalStorage("email").toLowerCase());
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [showProductDetailData, setShowProductDetailData] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileMenuLanding, setShowMobileMenuLanding] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [cartItems, setCartItems] = useState(getLocalStorage("cartItems"));
  const [orderItems, setOrderItems] = useState(getLocalStorage("orderItems"));
  const [totalPrice, setTotalPrice] = useState(getLocalStorage("totalPrice"));
  const [totalQuantities, setTotalQuantities] = useState(
    getLocalStorage("totalQuantities")
  );

  let findProduct;
  let findProductOrder;
  let index;

  const [qty, setQty] = useState(1);

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email.toLowerCase()));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
  }, [
    email,
    orderItems,
    cartItems,
    totalPrice,
    totalQuantities,
    showProductDetailData,
  ]);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    showPassword ? setShow(true) : setShow(false);
  };

  const onChangeName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowModal = () => {
    setShowOrder(false);
    setShowProductDetail(false);
    setShowCart(false);
    setShowAbout(false);
    setShowMobileMenu(false);
    setShowMobileMenuLanding(false);
    setQty(1);
  };

  const handleSubmitSignUp = () => {
    try {
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      sessionStorage.setItem(
        "key",
        Math.floor(1000000000000000 + Math.random() * 9000000000000000)
      );
      toast.success(`Signup Successful`);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong`);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {
    try {
      if (
        sessionStorage.getItem("email").toLowerCase() === email.toLowerCase() &&
        sessionStorage.getItem("password") === password
      ) {
        sessionStorage.setItem(
          "key",
          Math.floor(1000000000000000 + Math.random() * 9000000000000000)
        );
        navigate("/dashboard");
        toast.success(`Login Successful`);
      } else {
        toast.error(`Incorrect Login`);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Incorrect Login`);
    }
  };

  const logOut = () => {
    try {
      sessionStorage.removeItem("key");
      toast.success("Logout Successful");
      navigate("/");
      setShowOrder(false);
      setShowProductDetail(false);
      setShowCart(false);
      setShowAbout(false);
      setShowMobileMenu(false);
      setShowMobileMenuLanding(false);
      setQty(1);
    } catch (error) {
      console.log(error);
    }
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (cartProduct) => cartProduct._id === product._id
    );

    if (checkProductInCart) {
      setTotalPrice(totalPrice + product.price * quantity);
      setTotalQuantities(totalQuantities + quantity);
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };

        return cartProduct;
      });

      setCartItems(updatedCartItems);
      toast.success(`${qty} ${product.name} added to the cart`);
    } else {
      setTotalPrice(totalPrice + product.price * quantity);
      setTotalQuantities(totalQuantities + quantity);
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);

      toast.success(`${qty} ${product.name} added to the cart.`);
    }
  };

  const onRemove = (product) => {
    findProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice(totalPrice - findProduct.price * findProduct.quantity);
    setTotalQuantities(totalQuantities - findProduct.quantity);
    setCartItems(newCartItems);
  };

  const onRemoveOrderItem = (product) => {
    findProductOrder = orderItems.find(
      (item) => item.obj_id === product.obj_id
    );
    const newOrderItems = orderItems.filter(
      (item) => item.obj_id !== product.obj_id
    );
    setOrderItems(newOrderItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    findProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    if (value === "inc") {
      findProduct.quantity += 1;
      cartItems[index] = findProduct;
      setTotalPrice(totalPrice + findProduct.price);
      setTotalQuantities(totalQuantities + 1);
    }
    if (value === "dec") {
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
        cartItems[index] = findProduct;
        setTotalPrice(totalPrice - findProduct.price);
        setTotalQuantities(totalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((oldQty) => {
      const tempQty = oldQty + 1;
      return tempQty;
    });
  };

  const decQty = () => {
    setQty((oldQty) => {
      let tempQty = oldQty - 1;
      if (tempQty < 1) {
        tempQty = 1;
      }
      return tempQty;
    });
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: sessionStorage.getItem("email"),
    firstname: sessionStorage.getItem("firstName"),
    amount: totalPrice * 100,
    metadata: {
      custom_fields: [
        {
          display_name: "Orders(s)",
          variable_name: "Order(s)",
          value: cartItems,
        },
      ],
    },
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLISHABLE_KEY,
  };

  const handlePayStackSuccessAction = (reference) => {
    console.log("message", JSON.stringify(reference));
    setShowCart(false);
    if (reference) {
      setOrderItems(
        cartItems.concat(orderItems).map((obj, index) => {
          return { ...obj, obj_id: index };
        })
      );
      navigate("/dashboard");
      localStorage.removeItem("cartItems");
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
      toast.success(`Transaction Successful. Order Placed`);
    }
  };

  const handlePayStackCloseAction = () => {
    setShowCart(false);
    toast.error(`Transaction Cancelled`);
  };

  const componentProps = {
    ...config,
    text: "Pay with PayStack",
    onSuccess: (reference) => handlePayStackSuccessAction(reference),
    onClose: handlePayStackCloseAction,
  };
  var date = new Date();
  var hours = date.getHours();

  let message;

  if (hours < 12) {
    message = "Good Morning";
  } else if (hours < 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }

  return (
    <Context.Provider
      value={{
        showAbout,
        message,
        setShowAbout,
        showProductDetail,
        showMobileMenu,
        showMobileMenuLanding,
        setShowMobileMenuLanding,
        setShowMobileMenu,
        handleShowModal,
        setShowProductDetail,
        showProductDetailData,
        setShowProductDetailData,
        showCart,
        setShowCart,
        showOrder,
        setShowOrder,
        findProduct,
        findProductOrder,
        showPassword,
        setShowPassword,
        handleShowPassword,
        firstName,
        email,
        password,
        show,
        onChangeName,
        onChangeEmail,
        onChangePassword,
        handleSubmitSignUp,
        logOut,
        handleLogin,
        validateEmail,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        onRemoveOrderItem,
        qty,
        setQty,
        cartItems,
        orderItems,
        totalPrice,
        totalQuantities,
        componentProps,
        handlePayStackSuccessAction,
        handlePayStackCloseAction,
        config,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
