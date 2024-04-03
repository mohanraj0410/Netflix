import React from "react";
import GptCardTrailerVideo from "./gptCardTrailerVideo";
import GptCardMovieTrailerDetails from "./gptCardMovieTrailerDetails";
import useGPTCardTrailer from "../hooks/useGPTCardTrailer";

const GptMovieTrailer = () => {
  useGPTCardTrailer();
  return (
    <div className="gptMovieTrailerContainer">
      <GptCardTrailerVideo />
      <GptCardMovieTrailerDetails />
    </div>
  );
};

export default GptMovieTrailer;
