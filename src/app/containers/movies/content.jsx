"use client";

import Link from "next/link";
import { useMovies } from "../hooks/useMovies";

export const Content = () => {
  const { data, error, isError, isLoading, isSuccess } = useMovies();

  return (
    <div className="text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Movies</h1>
      <h2 className="text-2xl font-semibold mb-4">Your Next Watch</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {isSuccess && data.map(movie => (
          <div key={movie.id} className="relative group">
            <Link href={`/movie/${encodeURIComponent(movie.id)}`}>
                <img src={'https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg'} alt={movie.title} className="w-full h-auto"/>
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-lg font-bold">{movie.title}</h3>
                    <p className="mt-2">{movie.description}</p>
                  </div>
                </div>
            </Link>
          </div>
        ))}
      </div>
      {isError && (
        <div className="text-red-600 mt-4">
          {error.message}
        </div>
      )}
      {isLoading && <div className="mt-4">Content is loading...</div>}
    </div>
  );
};
