import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        //name Of Slice: slice
        cart:cartSlice,

    },
});

export default store;      