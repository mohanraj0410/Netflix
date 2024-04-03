import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useMovieTrailer = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json.results)
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useMovieTrailer;
