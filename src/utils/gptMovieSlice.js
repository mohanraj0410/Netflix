import { createSlice } from "@reduxjs/toolkit";

const gptMovieSlice = createSlice({
  name: "gptMovieSlice",
  initialState: {
    gptMovieSlice: null,
  },
  reducers: {
    addGptMovieSlice: (state, action) => {
      state.gptMovieSlice = action.payload;
    },
  },
});

export default gptMovieSlice.reducer;
export const { addGptMovieSlice } = gptMovieSlice.actions;
