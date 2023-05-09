import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addCache } = cacheSlice.actions;

export default cacheSlice.reducer;
