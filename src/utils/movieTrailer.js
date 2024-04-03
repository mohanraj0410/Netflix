import { createSlice } from "@reduxjs/toolkit";

const movieTrailerSlice = createSlice({
  name: "moviesTrailer",
  initialState: {
    movieTrailerVideo: null,
  },
  reducers: {
    addMovieTrailer: (state, action) => {
      state.movieTrailerVideo = action.payload;
    },
  },
});

export default movieTrailerSlice.reducer;
export const { addMovieTrailer} =
  movieTrailerSlice.actions;
