import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './signup.css'
import {useForm} from 'react-hook-form'
export default function Signup() {

    const{register,handleSubmit,formState:{errors},}=useForm()
    
    // function frmSubmit (event) {
    //     event.preventDefault()
    //     const data = new FormData(event.target)
    //     const frmdata = Object.fromEntries(data.entries())
    //     console.log(frmdata);
    //     event.target.reset()
    // }
  return (
    <div className='signup'>
    <div className='signfrm'>

        <Form onSubmit={handleSubmit((data)=>console.log(data))} >
            <h3>Signup</h3>
            <Form.Control {...register('name',{required:true})} type='text' placeholder='Name' />
            {errors.name && <p>* Name required</p>}
            <Form.Control {...register('lastname',{required:true})} type='text' placeholder='Last name' />
            {errors.lastname && <p>* Required</p>}
            <Form.Control {...register('phone',{pattern:'^[7-9][0-9]{9}$',required:true})} type='tel'   placeholder='Phone Number' />
            {errors.phone && <p>* Required</p>}
            <Form.Control {...register('email',{ pattern:'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$',required:true})}   placeholder='email'  />
            {errors.email && <p>* Required</p>}
            <Form.Control {...register("pwd",{required:true,minLength:6})}type='password'  placeholder='password'  />
            {errors.pwd && <p>* Required</p>}
            <Form.Control {...register("pwdc",{required:true})}type='password'   placeholder='Re-password'/>
            {errors.pwd && <p>* Required</p>}
            <Button variant='primary' type='submit'>Signup</Button>
            <Link to='/login' style={{textDecoration:"none"}}>If you have already an account </Link>
        </Form>
        </div> 
    </div>
  )
}
