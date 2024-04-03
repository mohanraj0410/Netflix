import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import Browser from "./browser";
import MovieCardTrailer from "./movieCardTrailer";
import GptMovieTrailer from "./gptMovieTrailer";

const Body = () => {
  let appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/movietrailer",
      element: <MovieCardTrailer />,
    },
    {
      path: "/gptmovietrailer",
      element: <GptMovieTrailer />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
