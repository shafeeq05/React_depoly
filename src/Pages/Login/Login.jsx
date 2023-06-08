import React,{useContext} from 'react'
import './login.css'
import {Button, Form} from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import  { AppContext } from '../../App'

export default function Login(data) {
  const {setLoginbtn} = useContext(AppContext)
  const {register,handleSubmit,formState:{errors}} = useForm()
    const navigate = useNavigate()
    function frmSubmit(data){
        event.preventDefault()
        const data1 = new FormData(event.target)
        const frmdata = Object.fromEntries(data1.entries())
        console.log(data);
        axios.post('http://localhost:3000/',frmdata).then((res)=>{
            console.log(res.data);
            setLoginbtn("Logout")
            localStorage.setItem("login",res.data)
            navigate('/home')
        }).catch((err)=>{
            console.log("errorr--",err.response.data);
        })
    }
  return (
    <>

    <div className='login'>
   <div className='lgn-frm'>
   
   <Form onSubmit={handleSubmit((data)=>frmSubmit(data))}>
   <h3>Login</h3>
        <Form.Control {...register("uname",{required:true,minLength:2})} type='text' placeholder="username"   />
        {errors.uname && <p>required</p>}
        <Form.Control {...register("pwd",{required:true,minLength:5})} type='password' placeholder='Password'  />
        {errors.pwd && <p>minimun 6 char</p>}
        <Button variant='primary' type='submit'>Login</Button>
        <NavLink to='/signup'>Register</NavLink>
    
    </Form>
   </div>
    </div>
    </>
  )
}
