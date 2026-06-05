import { createSlice } from "@reduxjs/toolkit";
import { CHAT_MESSAGE_COUNT } from "./constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);

      if (state.messages.length > CHAT_MESSAGE_COUNT) {
        state.messages.shift(); // remove oldest message
      }
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
