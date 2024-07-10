"use client";

import { useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import axios from "axios";

export const Content = () => {
  const movie = {
    id: 5,
    name: "Hobbit",
  };

  useEffect(() => {
    axios.post("http://localhost:3000/api/movies", movie);
  }, []);

  return (
    <>
      {/* {isSuccess &&
        data.data.map((movie) => (
          <div key={`${movie.id}-${movie.name}`}>{movie.name}</div>
        ))}
      {isError && (
        <div className="text-red-600">
          Something went wrong with the movies fetch
        </div>
      )}
      {isLoading && <div>Content is loading...</div>} */}
    </>
  );
};
