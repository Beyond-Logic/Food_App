/** @format */

import React from "react";
import LoginBg from "../assets/LoginBg.svg";
import { AuthContainer } from "../components";
import { useStateContext } from "../context/StateContext";

const Login = () => {
  const {
    showPassword,
    handleShowPassword,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    handleLogin,
    validateEmail,
  } = useStateContext();
  return (
    <AuthContainer
      LoginSignUpBg={LoginBg}
      title="Welcome Back!"
      buttonText="LOGIN"
      SignUpText="Create an account"
      ForgotPasswordText="Forgot Password"
      login={true}
      showPassword={handleShowPassword}
      showText="absolute top-52 md:right-28 right-16 cursor-pointer"
      titleLink="/"
      onSubmit={handleLogin}
      disabled={!validateEmail(email) || password.length < 1 ? true : false}
    >
      <input
        type="text"
        name={email}
        placeholder="Your Email Address"
        className="py-4 px-5 border-2 border-[#FBDDBB] rounded-sm mb-10 border-opacity-50"
        onChange={onChangeEmail}
      />

      <input
        type={showPassword ? "text" : "password"}
        name={password}
        placeholder="Your Password"
        className="py-4 px-5 border-2 border-[#FBDDBB] rounded-sm mb-10 border-opacity-50"
        onChange={onChangePassword}
      />
    </AuthContainer>
  );
};

export default Login;
