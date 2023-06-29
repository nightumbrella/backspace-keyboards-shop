import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const KeyboardsLS =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
const SwitchesLS =
    localStorage.getItem("cartItemsSwitch") !== null
        ? JSON.parse(localStorage.getItem("cartItemsSwitch"))
        : [];

const initialState = {
    KeyboardsList: KeyboardsLS,
    SwitchesList: SwitchesLS,
};

const CartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        addCartKeyboard: (state, { payload }) => {
            const existingProducts = state.KeyboardsList.find(
                (keyboard) => keyboard.id === payload.id
            );
            if (existingProducts) {
                existingProducts.quantity++;
            } else state.KeyboardsList.push(payload);
            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.KeyboardsList.map((keyboard) => keyboard))
            );
        },
        incQTY: (state, { payload }) => {
            const findProduct = state.KeyboardsList.find(
                (keyboard) => keyboard.id === payload.id
            );
            if (findProduct) {
                findProduct.quantity++;
            }
        },
        decQTY: (state, { payload }) => {
            const findProduct = state.KeyboardsList.find(
                (keyboard) => keyboard.id === payload.id
            );
            if (findProduct.quantity > 1) {
                findProduct.quantity--;
            }
        },
        removeCart: (state, { payload }) => {
            state.KeyboardsList = state.KeyboardsList.filter(
                (keyboard) => keyboard.id !== payload.id
            );
        },
        addCartSwitch: (state, { payload }) => {
            const existingProducts = state.SwitchesList.find(
                (switchItem) => switchItem.id === payload.id
            );
            if (existingProducts) {
                existingProducts.quantity++;
            } else state.SwitchesList.push(payload);
            localStorage.setItem(
                "cartItemsSwitch",
                JSON.stringify(state.SwitchesList.map((switchItem) => switchItem))
            );
        },
        incQTYSwitch: (state, { payload }) => {
            const findProduct = state.SwitchesList.find(
                (switchItem) => switchItem.id === payload.id
            );
            if (findProduct) {
                findProduct.quantity++;
            }
        },
        decQTYSwitch: (state, { payload }) => {
            const findProduct = state.SwitchesList.find(
                (switchItem) => switchItem.id === payload.id
            );
            if (findProduct.quantity > 1) {
                findProduct.quantity--;
            }
        },
        removeCartSwitch: (state, { payload }) => {
            state.SwitchesList = state.SwitchesList.filter(
                (switchItem) => switchItem.id !== payload.id
            );
        },
    },
});

export default CartSlice.reducer;
export const {
    addCartKeyboard,
    incQTY,
    decQTY,
    removeCart,
    addCartSwitch,
    incQTYSwitch,
    decQTYSwitch,
    removeCartSwitch
} = CartSlice.actions;
export const UseCartSlice = () => useSelector((state) => state.CartSlice);
