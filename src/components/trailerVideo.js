import React from "react";
import useBackgroundTrailer from "../hooks/useBackgroundTrailer";
import { useSelector } from "react-redux";

const TrailerVideo = ({ movieId }) => {
  let trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useBackgroundTrailer(movieId);
  return (
    <div className="trailerVideo">
      <iframe
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&showinfo=0&loop=1&controls=0&playlist=" +
          trailerVideo?.key +
          ""
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerVideo;
