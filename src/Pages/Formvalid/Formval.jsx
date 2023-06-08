import {useForm} from 'react-hook-form'
import { Button, Form } from 'react-bootstrap';
import React from 'react'

export default function Formval() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Form.Control {...register('firstName')}  placeholder='first name'/>
      <Form.Control {...register('lastName', { required: true })}  placeholder='last name'/>
      {errors.lastName && <p>Last name is required.</p>}
      <Form.Control {...register('age', { pattern: /\d+/ })} placeholder='age'/>
      {errors.age && <p>Please enter number for age.</p>}
     <button ><Button>Click</Button></button>
     
    </form>
  );
}

