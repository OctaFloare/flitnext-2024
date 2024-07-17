"use client";

import { useSettingsContext } from "@/app/providers/settingsContext";
import Link from "next/link";
import { useMovies } from "../hooks/useMovies";
import { MovieGrid } from "./movieGrid";

export const Content = () => {
  const { settings } = useSettingsContext();
  
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
      <Link href="/create-movie">
          <button className="px-4 py-2 text-white rounded bg-[#45A29E] hover:bg-[#2A615F]">Create New Movie</button>
      </Link>
  </div>
  );
};
