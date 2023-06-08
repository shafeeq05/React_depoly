import {
    Home,
    Cart,
    Ewallet
  } from '../Pages/index'
  import Error from '../Pages/Error'
  import { Route, Routes } from 'react-router-dom'

  import React from 'react'
  
  export default function Privaterouter() {
    return (
        <Routes>

        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/e-wallet' element={<Ewallet/>}/>
       
        </Routes>
    )
  }
  