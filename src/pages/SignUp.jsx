/** @format */

import React from "react";
import { AuthContainer } from "../components";
import SignUpBg from "../assets/SignUpBg.svg";
import { useStateContext } from "../context/StateContext";

const SignUp = () => {
  const {
    firstName,
    email,
    password,
    showPassword,
    handleShowPassword,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    handleSubmitSignUp,
    validateEmail,
  } = useStateContext();

  return (
    <>
      <AuthContainer
        LoginSignUpBg={SignUpBg}
        title="Welcome to Lilies!"
        buttonText="SIGN UP"
        signUp={true}
        showPassword={handleShowPassword}
        showText="absolute -top-16  -mt-4 md:right-5 right-4 cursor-pointer"
        titleLink="/"
        onSubmit={handleSubmitSignUp}
        // SignUpText="Create an account"
        // ForgotPasswordText="Forgot Password"
        disabled={
          !validateEmail(email) || firstName.length < 1 || password.length < 1
            ? true
            : false
        }
      >
        <input
          type="text"
          name={firstName}
          placeholder="Your First Name"
          className="py-4 px-5 border-2 border-[#FBDDBB] rounded-sm mb-10 border-opacity-50"
          onChange={onChangeName}
        />
        <input
          type="email"
          name={email}
          placeholder="Your Email Address"
          className="py-4 px-5 border-2 border-[#FBDDBB] rounded-sm mb-10 border-opacity-50 top-8"
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
    </>
  );
};

export default SignUp;
