import React from "react";
import GptSearchBar from "./gptSearchBar";
import GptMovieList from "./gptMovieList";

const GptSearch = () => {
  return (
    <div className="gpt-bgimg">
      <div className="bgcolor">
        <GptSearchBar />
        <GptMovieList />
      </div>
    </div>
  );
};

export default GptSearch;
