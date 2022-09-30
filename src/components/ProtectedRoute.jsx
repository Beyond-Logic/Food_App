/** @format */

import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const useAuth = () => {
    const user = sessionStorage.getItem("key");
    return user;
  };

  const navigate = () => {
    window.location = "/login";
  };

  const isAuth = useAuth();
  return isAuth ? <Outlet /> : navigate();
};

export default ProtectedRoute;
