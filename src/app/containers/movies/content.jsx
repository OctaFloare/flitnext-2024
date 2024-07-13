"use client";

import { useMovies } from "../hooks/useMovies";
import Link from "next/link";

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
      <Link href="/create-movie">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Create New Movie</button>
      </Link>
  </div>
  );
};
