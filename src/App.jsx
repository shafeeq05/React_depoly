
import './App.css'
import {Footer,Navbarr} from './Component/index'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createContext, useState } from 'react'
import Privaterouter from './Routersetting/Privaterouter';
import Publicrouter from './Routersetting/Publicrouter';


export const AppContext = createContext();
function App() {
  const [loginbtn,setLoginbtn] = useState("Login")
 
  return (
    <>
   <AppContext.Provider value={{loginbtn,setLoginbtn}}>
    <Navbarr/>
    {/* <RouterProvider router={router} /> */}
  {console.log(localStorage.getItem("login"))}
    {localStorage.getItem("login")==200? <Privaterouter/>:<Publicrouter/>}
            {/* <Routes>
        
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
         <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Formval/>}/>
        <Route path='/cart' element={<Cart/>} /> 
        <Route path="/error" element={<Error/>}/> 

      </Routes> */}
     

      {/* <Footer/> */}
        {/* <Route path='/r' element={<Reduxeg/>} /> */}
      </AppContext.Provider>
    </>
  )
}

export default App
