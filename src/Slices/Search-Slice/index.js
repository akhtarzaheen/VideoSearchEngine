import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchList: {},
  },
  reducers: {
    addSearchList: (state, action) => {
      state.searchList = action.payload;
    },
  },
});

export const { addSearchList } = SearchSlice.actions;

export default SearchSlice.reducer;
