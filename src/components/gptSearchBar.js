import React, { useRef } from "react";
import language from "../utils/languages";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION, GEMINI_key } from "../utils/constant";
import { addGptMovieSlice } from "../utils/gptMovieSlice";

const GptSearchBar = () => {
  let lang = useSelector((store) => store.config.language);

  let dispatch = useDispatch();

  let inputValue = useRef(null);
  // console.log(inputValue);

  let getGPTMovieSuggestion = async (movieName) => {
    let gptMovie = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    let json = await gptMovie.json();
    return json.results[0];
  };

  let handleGPTSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      inputValue.current.value +
      ".Only give me name of 5 movies using comma seperated like the example result given ahead. Example result : vikram vedha,leo,kaithi";

    const { GoogleGenerativeAI } = require("@google/generative-ai");

    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(GEMINI_key);

    async function run() {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = gptQuery;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      // console.log(text);

      var string = text;
      var array = string.split(",");

      let a = array.map((x) => {
        return getGPTMovieSuggestion(x);
      });
      // console.log(a);
      let results = await Promise.all(a);
      dispatch(addGptMovieSlice(results));
    }

    run();
  };

  return (
    <div className="gptSearch">
      <div>
        <input
          ref={inputValue}
          placeholder={language[lang].gptSearchPlaceholder}
        />
        <button onClick={handleGPTSearch}>{language[lang].search}</button>
      </div>
    </div>
  );
};

export default GptSearchBar;
