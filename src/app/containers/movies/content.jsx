"use client";

import { useMovies } from "../hooks/useMovies";
import {MovieGrid} from "@/app/containers/movies/movieGrid";

export const Content = () => {
  const { data, error, isError, isLoading, isSuccess} = useMovies();

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-8">Movies List</h1>
      {isSuccess && <MovieGrid data={data}/>}
      {isError && (
        <div className="text-red-600">
          {error.message}
        </div>
      )}
      {isLoading && <div>Content is loading...</div>}
  </div>
  );
};
