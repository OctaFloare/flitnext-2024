"use client";

import Link from "next/link";
import Image from "next/image";
import { useMovies } from "../hooks/useMovies";

export const Content = () => {
  const { data, error, isError, isLoading, isSuccess } = useMovies();

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold mb-6">Movies List</h1>
      {isLoading && <div>Content is loading...</div>}
      {isError && <div className="text-red-600">{error.message}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isSuccess &&
          data.map((movie) => {
            return (
              <div
                key={movie.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden h-30"
              >
                <Link href={`/movie/${encodeURIComponent(movie.id)}`}>
                  <div className="block hover:bg-gray-300">
                    <Image
                      src={movie.photo}
                      alt={movie.title}
                      className="w-full h-60 object-cover"
                      width={300}
                      height={200}
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold">{movie.title}</h2>
                      <p className="text-gray-600">{movie.description}</p>
                      <div className="mt-2 flex flex-wrap">
                        {movie.genres.map((genre) => (
                          <span
                            key={genre.id}
                            className="text-sm bg-blue-200 text-blue-800 mr-2 px-2 py-1 rounded"
                          >
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
