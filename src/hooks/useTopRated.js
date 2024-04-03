import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  let dispatch = useDispatch();

  let getTopRated = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    let json = await data.json();
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
