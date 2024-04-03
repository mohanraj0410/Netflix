import React from "react";
import Header from "./header";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import GptSearch from "./gptSearch";

const Browser = () => {
  let gpt = useSelector((store) => store.gpt);

  useMovieTrailer();
  return (
    <div className="browser">
      <Header />
      {gpt.gptSlice ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
