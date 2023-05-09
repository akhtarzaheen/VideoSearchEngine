import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chat: [],
  },
  reducers: {
    addChat: (state, action) => {
      //   if (state.chat.length === 10) state.chat.pop();
      state.chat.splice(25, 1);
      state.chat.unshift(action.payload);
    },
  },
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
