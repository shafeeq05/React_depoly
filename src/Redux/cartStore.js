import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./eWallet";
import eWallet from "./eWallet";

export const store = configureStore ({
    reducer:{
        cart: cartSlice,
        eWallet:eWallet
        
    }
})