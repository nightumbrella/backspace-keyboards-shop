import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const wishListKeyboard = localStorage.getItem("wishlistKeyboard") !== null ? JSON.parse(localStorage.getItem("wishlistKeyboard")) : []
const wishListSwitch = localStorage.getItem("wishlistSwitch") !== null ? JSON.parse(localStorage.getItem("wishlistSwitch")) : []

const initialState = {
    wishListKeyboards: wishListKeyboard,
    wishListSwitches:wishListSwitch,
}

const WishListSlice = createSlice({
    name: 'WishList',
    initialState,
    reducers: {
        addWishListKeyboards: (state, { payload }) => {
            const findKeyboard = state.wishListKeyboards.find(keyboard => keyboard.id === payload.id)
            if (findKeyboard) {
                state.wishListKeyboards = state.wishListKeyboards.filter(keyboardItem => keyboardItem.id !== payload.id)
            } else {
                state.wishListKeyboards.push(payload)
            }
            localStorage.setItem("wishlistKeyboard", JSON.stringify(state.wishListKeyboards.map(keyboardItem => keyboardItem)))

        },
        addWishListSwitches: (state, { payload }) => {
            const findKSwitch = state.wishListSwitches.find(keyboard => keyboard.id === payload.id)
            if (findKSwitch) {
                state.wishListSwitches = state.wishListSwitches.filter(keyboardItem => keyboardItem.id !== payload.id)
            } else state.wishListSwitches.push(payload)
            localStorage.setItem("wishlistSwitch", JSON.stringify(state.wishListSwitches.map(switchItem => switchItem)))

        }
    }
})

export default WishListSlice.reducer
export const { addWishListKeyboards, addWishListSwitches } = WishListSlice.actions
export const UseWishList = () => useSelector(state => state.WishList)