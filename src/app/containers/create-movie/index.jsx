"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import MovieForm from "./MovieForm";

const createMovie = async (movieData) => {
  const response = await axios.post("/api/movies", movieData);

  return response.data;
};

export const CreateMovie = () => {
  const { mutate, data, isSuccess, isError, error } = useMutation({
    mutationFn: createMovie,
    mutationKey: ["create-movie"],
  });

  return (
    <>
      {isError && <div className="text-red-600">{error.message}</div>}
      <MovieForm mutate={mutate} />
      {isSuccess && (
        <div>
          Newly created movie
          <p>This is id: {data.id}</p>
          <p>This is movie name: {data.name}</p>
        </div>
      )}
    </>
  );
};
