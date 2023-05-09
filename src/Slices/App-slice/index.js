import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    toggle: true,
  },
  reducers: {
    changeToggle: (state) => {
      state.toggle = !state.toggle;
    },
    closeMenu: (state) => {
      state.toggle = false;
    },
  },
});

export const { changeToggle, closeMenu } = appSlice.actions;

export default appSlice.reducer;
