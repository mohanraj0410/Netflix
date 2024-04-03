import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { useSelector } from "react-redux";
import { addGPTMovieTrailer } from "../utils/gptMovieTrailer";

const useGPTCardTrailer = () => {
  let id = useSelector(
    (store) => store.gptMovieTrailerSlice.gptMovieTrailerVideo.id
  );
  console.log(id);
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    const filterTrailer = json.results.filter((x) => x.type === "Trailer");
    const trailer =
      json.results.length == 0
        ? 1
        : filterTrailer.length
        ? filterTrailer[0]
        : json.results[0];

    dispatch(addGPTMovieTrailer(trailer));
  };
  useEffect(() => {
    getTrailerVideo();
  }, []);
};

export default useGPTCardTrailer;
