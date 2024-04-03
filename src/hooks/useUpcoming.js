import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpcoming } from "../utils/movieSlice";

const useUpcoming = () => {
  let dispatch = useDispatch();

  let getUpComing = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTION
    );
    let json = await data.json();
    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    getUpComing();
  }, []);
};

export default useUpcoming;
