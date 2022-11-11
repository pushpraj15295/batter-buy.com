import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import ForgetPassword from '../Pages/ForgetPassword'
import Login from '../Pages/Login'
import ResetPassword from '../Pages/ResetPassword'
import Signup from '../Pages/Signup'
import Wishlist from '../Pages/Wishlist'

const AllRoutes = () => {
  return (
    <>
     <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/forgetpassword" element={<ForgetPassword/>}/>
         <Route path="/resetPassword" element={<ResetPassword/>}/>
         <Route path="/wishlist" element={<Wishlist/>}/>
         <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </>
  )
}

export default AllRoutes