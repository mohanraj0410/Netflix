import { createSlice } from "@reduxjs/toolkit";

const gptMovieTrailerDetailsSlice = createSlice({
  name: "gptMoviesTrailerDetails",
  initialState: {
    gptMovieTrailerDetails: null,
  },
  reducers: {
    addGPTMovieTrailerDetails: (state, action) => {
      state.gptMovieTrailerDetails = action.payload;
    },
  },
});

export default gptMovieTrailerDetailsSlice.reducer;
export const { addGPTMovieTrailerDetails } = gptMovieTrailerDetailsSlice.actions;
