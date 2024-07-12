'use client'

import { CreateMovieForm } from "./createMovieForm";
import { useCreateMovie } from "../hooks/useCreateMovie";
import DisplayError from "./displayError";
import DisplaySuccess from "./displaySuccess";

export const CreateMovie = () => {
    const { mutate : handleFormSubmit, data, isSuccess, isError, error } = useCreateMovie();
      
    return (
        <div className="flex flex-col items-center justify-center h-full w-full space-y-4">
          {isError && <DisplayError error={error.message} />}
          <CreateMovieForm onSubmit={handleFormSubmit} />
          {isSuccess && <DisplaySuccess data={data} />}
        </div>
    );
};
