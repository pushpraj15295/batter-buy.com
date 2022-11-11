import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgetPassword from '../Pages/ForgetPassword'
import Login from '../Pages/Login'
import ResetPassword from '../Pages/ResetPassword'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <>
     <Routes>
         {/* <Route path="/" element={<Home/>}/> */}
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/forgetpassword" element={<ForgetPassword/>}/>
         <Route path="/resetPassword" element={<ResetPassword/>}/>

         {/* <Route path="/about" element={<About/>}/> */}
         {/* <Route path="/shop" element={<Shop/>}/> */}
         {/* <Route path="/categories" element={<Categories/>}/> */}
         {/* <Route path="/contact" element={<Contact/>}/> */}
         {/* <Route path="/cart" element={<Cart/>}/> */}
         {/* <Route path="/product" element={<Product/>}/> */}
         {/* <Route path="/productpage" element={<Productpage/>}/> */}
        
     </Routes>
    </>
  )
}

export default AllRoutes