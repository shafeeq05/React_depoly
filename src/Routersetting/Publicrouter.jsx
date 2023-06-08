
import { Route, Routes } from "react-router-dom";
import { Login,Signup,Homepage } from "../Pages/index";
import React from 'react'
import Error from "../Pages/Error";

export default function Publicrouter() {
  return (
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="*" element={<Error/>} />
   </Routes>
  )
}
