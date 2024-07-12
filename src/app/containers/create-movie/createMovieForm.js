
import React from 'react';
import '../styles/formStyle.css';
import { Formik} from 'formik';
import { MovieForm } from './movieForm';
import { movieFormInitialValues } from './movieFormInitialValues';
import { movieFormValidationSchema } from './movieFormValidationSchema';

export const CreateMovieForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ id: values.movieId, name: values.movieName });
    resetForm();
  };

  return (
    <div className="container">
      <Formik
        initialValues={movieFormInitialValues}
        validationSchema={movieFormValidationSchema}
        onSubmit={handleSubmit}>
       <MovieForm></MovieForm>
      </Formik>
    </div>
  );
};
