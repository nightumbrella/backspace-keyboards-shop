import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import KeyboardsFilterSlice from "./KeyboardsFilterSlice";
import WishListSlice from "./WishListSlice";

export const store=configureStore({
    reducer:{
        products:ProductSlice,
        keyboardFilter:KeyboardsFilterSlice,
        WishList:WishListSlice
    }
})