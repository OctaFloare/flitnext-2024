"use client";

import Link from "next/link";
import { useMovies } from "../hooks/useMovies";

export const Content = () => {
  const { data, error, isError, isLoading, isSuccess } = useMovies();

  return (
    <div className="flex justify-center items-center h-auto mt-20">
      <div className="p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">Movies List</h1>
        {isLoading && (
          <div className="text-xl text-gray-400 text-center">Content is loading...</div>
        )}
        {isError && (
          <div className="text-xl text-red-600 text-center">{error.message}</div>
        )}
        {isSuccess && (
          <div className="flex flex-wrap justify-center gap-4">
            {data.map((movie) => (
              <Link href={`/movie/${encodeURIComponent(movie.id)}`} key={movie.id} className="inline-block">
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded shadow transition-shadow duration-0 cursor-pointer transform hover:scale-105 hover:shadow-2xl">
                  <h2 className="text-lg font-medium text-white">
                    {movie.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
