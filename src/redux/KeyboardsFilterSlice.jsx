import { useSelector } from "react-redux";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  colors: [],
  sizes: [],
  RGB: [],
  connection: [],
};

const KeyboardFilterSlice = createSlice({
  name: "keyboardFilter",
  initialState,
  reducers: {
    setBrand: (state, { payload }) => {
      const { isChecked, brand } = payload;
      if (isChecked) {
        state.brands.push(brand);
      } else {
        state.brands = state.brands.filter((brandItem) => brandItem !== brand);
      }
    },
    setColor: (state, { payload }) => {
      const { isChecked, color } = payload;
      if (isChecked) {
        state.colors.push(color);
      } else {
        state.colors = state.colors.filter((colorItem) => colorItem !== color);
      }
    },
    setSize: (state, { payload }) => {
      const { isChecked, size } = payload;
      if (isChecked) {
        state.sizes.push(size);
      } else {
        state.sizes = state.sizes.filter((sizeItem) => sizeItem !== size);
      }
    },
    setRGB: (state, { payload }) => {
      const { isChecked, rgb } = payload;
      if (isChecked) {
        state.RGB.push(rgb);
      } else {
        state.RGB = state.RGB.filter((rgbItem) => rgbItem !== rgb);
      }
    },
    setConnection: (state, { payload }) => {
      const { isChecked, type } = payload;
      if (isChecked) {
        state.connection.push(type);
      } else {
        state.connection = state.connection.filter(
          (connectItem) => connectItem !== type
        );
      }
    },
  },
});

export default KeyboardFilterSlice.reducer;
export const { setBrand, setColor, setSize, setRGB, setConnection } =
  KeyboardFilterSlice.actions;
export const UseKeyboardsFilter = () =>
  useSelector((state) => state.keyboardFilter);
