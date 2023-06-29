import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import KeyboardsFilterSlice from "./KeyboardsFilterSlice";
import WishListSlice from "./WishListSlice";
import CartSlice from "./CartSlice";

export const store = configureStore({
    reducer: {
        products: ProductSlice,
        keyboardFilter: KeyboardsFilterSlice,
        WishList: WishListSlice,
        CartSlice: CartSlice
    }
})