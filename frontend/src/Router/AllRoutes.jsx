import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgetPassword from '../Pages/ForgetPassword'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <>
     <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/forgetpassword" element={<ForgetPassword/>}/>
     </Routes>
    </>
  )
}

export default AllRoutes