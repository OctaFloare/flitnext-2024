import React from 'react';
import { useFormik } from 'formik';
import '../styles/formStyle.css';

const CreateMovieForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      movieId: '',
      movieName: '',
    },
    onSubmit: (values) => {
      onSubmit({ id: values.movieId, name: values.movieName });
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="formGroup">
          <label htmlFor="movieId">Movie Id</label>
          <input
            id="movieId"
            name="movieId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.movieId}
            className="input"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="movieName">Movie name</label>
          <input
            id="movieName"
            name="movieName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.movieName}
            className="input"
          />
        </div>

        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default CreateMovieForm;
