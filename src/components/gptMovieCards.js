import React, { useState } from "react";
import { IMG_URL } from "../utils/constant";
import img from "../img/NoMovieImage.jpg";
import GptMovieTrailer from "./gptMovieTrailer";
import { useNavigate } from "react-router-dom";
import { addGPTMovieTrailerDetails } from "../utils/gptMovieTrailerDetails";
import { useDispatch } from "react-redux";
import { addGPTMovieTrailer } from "../utils/gptMovieTrailer";

const GptMovieCards = ({ poster_path, title, id, overview }) => {
  // console.log(poster_path, id);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleGPTMovieTrailer = (id, title, overview) => {
    // console.log(id,title, overview);
    dispatch(addGPTMovieTrailer({ id }));
    dispatch(addGPTMovieTrailerDetails({ title, overview }));
    navigate("/gptmovietrailer");
    <GptMovieTrailer />;
  };

  return (
    <div className="gptMovieCards">
      <div className="gptMovieContainer">
        {poster_path ? (
          <img
            className="gptMovieImage"
            src={IMG_URL + poster_path}
            alt="gptMovies"
            style={{ opacity: isButtonHovered ? 0.7 : 1 }}
          ></img>
        ) : (
          <img className="gptMovieImage" src={img}></img>
        )}
        <button
          className="gptViewButton"
          onClick={() => handleGPTMovieTrailer(id, title, overview)}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default GptMovieCards;
