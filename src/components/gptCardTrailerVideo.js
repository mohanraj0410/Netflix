import React from "react";
import { useSelector } from "react-redux";

const GptCardTrailerVideo = () => {
  let trailerVideo = useSelector(
    (store) => store.gptMovieTrailerSlice.gptMovieTrailerVideo
  );
  // console.log(trailerVideo);
  return (
    <div className="movieTrailer">
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

export default GptCardTrailerVideo;
