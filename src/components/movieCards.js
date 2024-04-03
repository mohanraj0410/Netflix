import React, { useState } from "react";
import { IMG_URL } from "../utils/constant";
import MovieCardTrailer from "./movieCardTrailer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieTrailer";
import { addMovieTrailerDetails } from "../utils/movieTrailerDetails";

const MovieCards = ({ posterPath, title, id, overview }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMovieTrailer = (id, title, overview) => {
    // console.log(title, overview);
    dispatch(addMovieTrailer({ id }));
    dispatch(addMovieTrailerDetails({ title, overview }));
    navigate("/movietrailer");
    <MovieCardTrailer />;
  };

  return (
    <div className="MoviePoster">
      <div className="ImageContainer">
        <img
          className="MovieImage"
          src={IMG_URL + posterPath}
          alt={title}
          style={{ opacity: isButtonHovered ? 0.5 : 1 }}
        />
        <button
          className="TrailerButton"
          onClick={() => handleMovieTrailer(id, title, overview)}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default MovieCards;
