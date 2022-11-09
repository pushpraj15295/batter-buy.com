import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <>
     <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
     </Routes>
    </>
  )
}

export default AllRoutes