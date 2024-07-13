
import * as Yup from 'yup';

export const movieFormValidationSchema = Yup.object({
  movieId: Yup.string().required('Movie ID is required'),
  movieName: Yup.string().required('Movie Name is required')
});
