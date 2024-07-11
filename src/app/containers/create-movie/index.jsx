'use client'

import CreateMovieForm from "./createMovieForm"
import { useCreateMovie } from "../hooks/useCreateMovie";
import DisplayError from "./displayError";
import DisplaySuccess from "./displaySuccess";

export const CreateMovie = () => {
    const { mutate, data, isSuccess, isError, error } = useCreateMovie();

    const handleFormSubmit = (values) => {
      mutate(values);
    };
      
    return (
        <div className="flex flex-col items-center justify-center h-full w-full space-y-4">
          {isError && <DisplayError error={error} />}
          <CreateMovieForm onSubmit={handleFormSubmit} />
          {isSuccess && <DisplaySuccess data={data} />}
        </div>
    );
};