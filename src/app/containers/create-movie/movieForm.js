
import React from 'react';
import { useFormik } from 'formik';

const MovieForm = () => {
  const formik = useFormik({
    initialValues: {
      movieId: '',
      movieName: '',
    },
    onSubmit: (values) => {
      
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="movieId">Movie Id</label>
        <input
          id="movieId"
          name="movieId"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.movieId}
        />
      </div>

      <div>
        <label htmlFor="movieName">Movie name</label>
        <input
          id="movieName"
          name="movieName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.movieName}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;
