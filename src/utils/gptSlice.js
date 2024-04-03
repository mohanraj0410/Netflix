import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSlice: false,
  },
  reducers: {
    showGptSearch: (state, action) => {
      state.gptSlice = !state.gptSlice;
    },
  },
});

export default gptSlice.reducer;
export const { showGptSearch } = gptSlice.actions;
