import React from "react";
import { Route, Routes } from "react-router-dom";
import Allproducts from "../Pages/Allproducts";
import { Description } from "../Pages/Description";
import ForgetPassword from "../Pages/ForgetPassword";
import Login from "../Pages/Login";
import ResetPassword from "../Pages/ResetPassword";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/allProducts" element={<Allproducts />} />
        <Route path="/men" element={<Allproducts />} />
        <Route path="/women" element={<Allproducts />} />
        <Route path="/kids" element={<Allproducts />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
