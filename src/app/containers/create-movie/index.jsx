'use client'

import CreateMovieForm from "./createMovieForm"
import { useCreateMovie } from "../hooks/useCreateMovies";

export const CreateMovie = () => {
    const { mutate, data, isSuccess, isError, error } = useCreateMovie();

    const handleFormSubmit = (values) => {
      mutate(values);
    };
      
    return (
        <div>
          {isError && <div className="text-red-600">{error.message}</div>}
          <CreateMovieForm onSubmit={handleFormSubmit} />
          {isSuccess && (
            <div>
              Newly created movie
              <p>This is id: {data.id}</p>
              <p>This is movie name: {data.name}</p>
            </div>
          )}
        </div>
    );
};