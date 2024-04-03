import React from "react";
import useCardTrailer from "../hooks/useCardTrailer";
import CardTrailerVideo from "./CardsTrailerVideo";
import CardMovieTrailerDetails from "./cardMovieTrailerDetails";

const MovieCardTrailer = () => {
  useCardTrailer();
  return (
    <div className="movieTrailerContainer">
      <CardTrailerVideo />
      <CardMovieTrailerDetails />
    </div>
  );
};

export default MovieCardTrailer;
