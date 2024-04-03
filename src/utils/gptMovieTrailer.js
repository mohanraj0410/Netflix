import { createSlice } from "@reduxjs/toolkit";

const gptMovieTrailerSlice = createSlice({
  name: "gptMoviesTrailer",
  initialState: {
    gptMovieTrailerVideo: null,
  },
  reducers: {
    addGPTMovieTrailer: (state, action) => {
      state.gptMovieTrailerVideo = action.payload;
    },
  },
});

export default gptMovieTrailerSlice.reducer;
export const { addGPTMovieTrailer} =
  gptMovieTrailerSlice.actions;
