import React from "react";
import { useSelector } from "react-redux";
import TrailerVideoTitle from "./trailerVideoTitle";
import TrailerVideo from "./trailerVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovie);
  if (!movies) return;

  const movieTrailer = movies[0];

  const { id, overview, title } = movieTrailer;
  return (
    <div className="mainContainer">
      <TrailerVideoTitle title={title} overview={overview} />
      <TrailerVideo movieId={id} />
    </div>
  );
};

export default MainContainer;
