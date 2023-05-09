import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "../Slices/App-slice";
import CacheSlice from "../Slices/Cache-Slice";
import ChatSlice from "../Slices/Chat-slice";

const store = configureStore({
  reducer: {
    app: AppSlice,
    cache: CacheSlice,
    chat: ChatSlice,
  },
});

export default store;
