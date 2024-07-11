
import React from 'react';
import useSubmitMovieFormik from '../hooks/useSubmitMovieFormik';
import '../styles/formStyle.css';
import FormField from './formField';

const CreateMovieForm = ({ onSubmit }) => {
  const formik = useSubmitMovieFormik(onSubmit);

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} className="form">
        <FormField
          id="movieId"
          label="Movie Id"
          formik={formik}
        />
        <FormField
          id="movieName"
          label="Movie Name"
          formik={formik}
        />
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default CreateMovieForm;