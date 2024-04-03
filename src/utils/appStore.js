import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
import movieTrailer from "./movieTrailer";
import movieTrailerDetails from "./movieTrailerDetails";
import gptMovieSlice from "./gptMovieSlice";
import gptMovieTrailer from "./gptMovieTrailer";
import gptMovieTrailerDetails from "./gptMovieTrailerDetails";

let appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSlice,
    gpt: gptSlice,
    config: configSlice,
    moviesTrailer: movieTrailer,
    movieTrailerDetails:movieTrailerDetails,
    gptMovieSlice:gptMovieSlice,
    gptMovieTrailerDetails:gptMovieTrailerDetails,
    gptMovieTrailerSlice:gptMovieTrailer,
  },
});
export default appStore;
