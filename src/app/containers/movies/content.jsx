"use client";

import { useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import axios from "axios";

export const Content = () => {
  const { data : movieNames, isLoading, isError, isSuccess } = useMovies();

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {isSuccess && movieNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {isError && (
        <div className="text-red-600">
          Something went wrong with the movies fetch
        </div>
      )}
      {isLoading && <div>Content is loading...</div>}
    </div>
  );
};
