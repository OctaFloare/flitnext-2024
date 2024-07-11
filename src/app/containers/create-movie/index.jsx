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
    <>
      <MovieForm handleSubmit={handleMovieSubmit} />
      {isError && (
        <div className="text-red-600">
          {error.response?.data?.message || "An error occurred"}
        </div>
      )}
      {isSuccess && (
        <div>
          Newly created movie
          <p>Movie name: {data.title}</p>
        </div>
      )}
    </>
  );
};
