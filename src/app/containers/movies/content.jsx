"use client";

import { useMovies } from "../hooks/useMovies";

export const Content = () => {
  const { data, error, isError, isLoading, isSuccess} = useMovies();

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {isSuccess && data.map(movie => (
        <li key={movie.id}>{movie.name}</li>
        ))}
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
