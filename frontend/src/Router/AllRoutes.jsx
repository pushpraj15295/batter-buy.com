import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import ForgetPassword from "../Pages/ForgetPassword";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ResetPassword from "../Pages/ResetPassword";
import Signup from "../Pages/Signup";
import Wishlist from "../Pages/Wishlist";
import Allproducts from "../Pages/Allproducts";
import { Description } from "../Pages/Description";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Success from '../Pages/Success'
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/allProducts" element={<Allproducts />} />
        <Route path="/men" element={<Allproducts />} />
        <Route path="/women" element={<Allproducts />} />
        <Route path="/kids" element={<Allproducts />} />
        <Route path="/description" element={<Description />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
