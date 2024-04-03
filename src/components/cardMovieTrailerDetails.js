import React from "react";
import { useSelector } from "react-redux";

const CardMovieTrailerDetails = () => {
  let videoDetails = useSelector(
    (store) => store.movieTrailerDetails.movieTrailerDetails
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

export default CardMovieTrailerDetails;
