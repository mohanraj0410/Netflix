import { createSlice } from "@reduxjs/toolkit";

const movieTrailerDetailsSlice = createSlice({
  name: "moviesTrailerDetails",
  initialState: {
    movieTrailerDetails: null,
  },
  reducers: {
    addMovieTrailerDetails: (state, action) => {
      state.movieTrailerDetails = action.payload;
    },
  },
});

export default movieTrailerDetailsSlice.reducer;
export const { addMovieTrailerDetails } = movieTrailerDetailsSlice.actions;
