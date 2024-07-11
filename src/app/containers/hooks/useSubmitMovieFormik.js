import { useFormik } from 'formik';
import * as Yup from 'yup';

const UseSubmitMovieFormik = (onSubmit) => {
  return useFormik({
    initialValues: {
      movieId: '',
      movieName: '',
    },
    validationSchema: Yup.object({
      movieId: Yup.string().required('Movie Id is required'),
      movieName: Yup.string().required('Movie Name is required'),
    }),
    onSubmit: (values) => {
      onSubmit({ id: values.movieId, name: values.movieName });
    },
  });
};

export default UseSubmitMovieFormik;