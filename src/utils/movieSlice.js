import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailerVideo: null,
    popularMovie: null,
    topRated: null,
    upComing: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upComing = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovie,
  addTrailerVideo,
  addPopularMovie,
  addTopRated,
  addUpcoming,
} = movieSlice.actions;
