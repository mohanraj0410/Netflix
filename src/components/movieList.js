import React from "react";
import MovieCards from "./movieCards";

const MovieList = ({ movies, title }) => {
  let moviesCard = movies;
  // console.log(moviesCard);
  if (!moviesCard) return;
  return (
    <div className="MovieCard">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="MovieCardImage">
        {moviesCard.map((x) => (
          <MovieCards
            key={x.id}
            id={x.id}
            posterPath={x.poster_path}
            title={x.title}
            overview={x.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
