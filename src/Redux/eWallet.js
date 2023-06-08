import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const eWallet = createSlice({
    name:"product",
    initialState,
    reducers:{
        wallet(state,action){
            state.push(action.payload)
        }
    }
})

export default eWallet.reducer
export const {wallet} = eWallet.actions