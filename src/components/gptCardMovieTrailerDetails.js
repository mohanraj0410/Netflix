import React from "react";
import { useSelector } from "react-redux";

const GptCardMovieTrailerDetails = () => {
  let videoDetails = useSelector(
    (store) => store.gptMovieTrailerDetails.gptMovieTrailerDetails
  );
  let title = videoDetails.title;
  let overview = videoDetails.overview;
  return (
    <div className="movieTrailerDeatils">
      <div>
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default GptCardMovieTrailerDetails;
