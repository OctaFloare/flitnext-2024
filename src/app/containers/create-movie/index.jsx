import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import MovieForm from "./movieForm";

const createMovie = async (movieData) => {
  const response = await axios.post("/api/movies", movieData);
  return response.data;
};

export const CreateMovie = () => {
  const { mutate, data, isSuccess, isError, error } = useMutation({
    mutationFn: createMovie,
    mutationKey: ["create-movie"],
  });

  function handleMovieSubmit(data) {
    mutate(data);
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <MovieForm handleSubmit={handleMovieSubmit} />
      {isError && (
        <div className="text-red-600 mt-4">
          {error.response?.data?.message || "An error occurred"}
        </div>
      )}
      {isSuccess && (
        <div className="text-green-600 mt-4">
          Newly created movie
          <p>Movie name: {data.title}</p>
        </div>
      )}
    </div>
  );
};
