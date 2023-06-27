import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { products,switches } from "../../db";

const initialState = {
    products,
    switches
}

const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

    }
})


export default ProductSlice.reducer
export const {} = ProductSlice.actions
export const UseProducts = () => useSelector(state => state.products)