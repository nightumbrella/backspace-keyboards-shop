import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import KeyboardsFilterSlice from "./KeyboardsFilterSlice";

export const store=configureStore({
    reducer:{
        products:ProductSlice,
        keyboardFilter:KeyboardsFilterSlice
    }
})