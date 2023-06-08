import axios from 'axios'
import React, { useEffect } from 'react'
import { wallet } from '../../Redux/eWallet'
import { useDispatch,useSelector } from 'react-redux'


export default function Ewallet() {
    const ewallet = useSelector(state=>state.eWallet)
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get('http://localhost:3000/').then((res)=>{
        console.log(res.data);
        dispatch(wallet(res.data))
        })
    },[])
  return (
    <div>Ewallet <p>{ewallet}</p></div>
  )
}
