import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useBackgroundTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    const filterTrailer = json.results.filter((x) => x.type === "Trailer");
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getTrailerVideo();
  }, []);
};

export default useBackgroundTrailer;
