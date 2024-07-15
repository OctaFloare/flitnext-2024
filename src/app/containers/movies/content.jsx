"use client";

import Link from "next/link";
import { useMovies } from "../hooks/useMovies";

export const Content = () => {
  const { data, error, isError, isLoading, isSuccess} = useMovies();

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {isSuccess && data.map(movie => { 
          console.log(movie)
          return(
        <li key={movie.id}>
          <Link href={`/movie/${encodeURIComponent(movie.id)}`}>
            {movie.title}
          </Link>
          </li>
        )})}
      </ul>
      {isError && (
        <div className="text-red-600">
          {error.message}
        </div>
      )}
      {isLoading && <div>Content is loading...</div>}
  </div>
  );
};
