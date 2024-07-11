"use client";

import { useMutation } from "@tanstack/react-query";

import axios from "axios";
import MovieForm from "./MovieForm";

const createMovie = async (movieData) => {
  const response = await axios.post("/api/movies", movieData);

  return response.data;
};

export const CreateMovie = () => {
  const { mutate, data, isSuccess, isError, error, reset } = useMutation({
    mutationFn: createMovie,
    mutationKey: ["create-movie"],
  });

  return (
    <>
      {isError && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center">
          <div className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md">
            <p className="text-lg font-bold">Error!</p>
            <p className="text-sm">{error.message}</p>
          </div>
        </div>
      )}
      <MovieForm mutate={mutate} reset={reset} />
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md">
            <p className="text-lg font-bold">Newly created movie</p>
            <p className="text-sm">This is id: {data.id}</p>
            <p className="text-sm">This is movie name: {data.name}</p>
          </div>
        </div>
      )}
    </>
  );
};
