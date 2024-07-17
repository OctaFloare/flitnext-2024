'use client';

import { Formik } from "formik";
import { useSubmitMovieForm } from "../hooks/useSubmitMovieForm";
import { validationSchema } from "@/app/containers/create-movie/validationSchema";
import { MovieForm } from "@/app/containers/create-movie/movieForm";
import { ErrorDisplay } from "@/app/containers/create-movie/errorDisplay";
import { SuccessDisplay } from "@/app/containers/create-movie/successDisplay";
import { initialValues } from "./formInitialValues";

export const CreateMovie = () => {
  const { onSubmit, data, isSuccess, isError, error } = useSubmitMovieForm();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <div>
          <MovieForm values={values} />
          {isError && <ErrorDisplay errorMessage={error.message} />}
          {isSuccess && <SuccessDisplay data={data} />}
        </div>
      )}
    </Formik>
  );
};
