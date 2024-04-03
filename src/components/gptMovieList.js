import React from "react";
import { useSelector } from "react-redux";
import GptMovieCards from "./gptMovieCards";

const GptMovieList = () => {
  let movieList = useSelector((store) => store.gptMovieSlice.gptMovieSlice);
  // console.log(movieList);

  if (!movieList) return null;
  return (
    <div>
      <div className="gptMovielist">
        {movieList.map((x) => {
          console.log(x);
          return x == undefined ? null : (
            <GptMovieCards
              key={x.id}
              title={x.title}
              overview={x.overview}
              id={x.id}
              poster_path={x.poster_path}
            />
          );
          // console.log(x)
        })}
      </div>
    </div>
  );
};

export default GptMovieList;
