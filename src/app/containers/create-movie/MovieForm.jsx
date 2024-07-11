import { Formik, Form, Field } from "formik";
import { genres } from "./movie-data";
import { initialValues } from "./movie-data";
import { movieValidationSchema } from "./validationSchema";

const MovieForm = ({ mutate }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={movieValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const movieData = {
          title: values.title,
          description: values.description,
          genres: {
            id: values.genres.id,
            name: values.genres.name,
          },
          videoSource: values.videoSource,
          cast: {
            role: values.cast.role,
            crew: {
              id: values.cast.crew.id,
              name: values.cast.crew.name,
            },
          },
        };

        mutate(movieData, {
          onSuccess: () => {
            resetForm();
            setSubmitting(false);
          },
          onError: () => {
            setSubmitting(false);
          },
        });
      }}
    >
      {({ isSubmitting, setFieldValue, errors, touched }) => (
        <Form className="flex flex-col space-y-4 items-center w-full">
          <Field type="text" name="title" placeholder="Title" />
          {errors.title && touched.title && (
            <div className="text-red-500">{errors.title}</div>
          )}

          <Field type="text" name="description" placeholder="Description" />
          {errors.description && touched.description && (
            <div className="text-red-500">{errors.description}</div>
          )}

          <Field
            as="select"
            name="genres.id"
            onChange={(e) => {
              const selectedGenre = genres.find(
                (genre) => genre.id.toString() === e.target.value,
              );
              setFieldValue("genres.id", selectedGenre ? selectedGenre.id : "");
              setFieldValue(
                "genres.name",
                selectedGenre ? selectedGenre.name : "",
              );
            }}
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </Field>
          {errors.genres?.id && touched.genres?.id && (
            <div className="text-red-500">{errors.genres.id}</div>
          )}
          {errors.genres?.name && touched.genres?.name && (
            <div className="text-red-500">{errors.genres.name}</div>
          )}

          <Field type="text" name="videoSource" placeholder="Video Source" />
          {errors.videoSource && touched.videoSource && (
            <div className="text-red-500">{errors.videoSource}</div>
          )}

          <Field type="text" name="cast.role" placeholder="Cast Role" />
          {errors.cast?.role && touched.cast?.role && (
            <div className="text-red-500">{errors.cast.role}</div>
          )}

          <Field type="text" name="cast.crew.id" placeholder="Crew ID" />
          {errors.cast?.crew?.id && touched.cast?.crew?.id && (
            <div className="text-red-500">{errors.cast.crew.id}</div>
          )}

          <Field type="text" name="cast.crew.name" placeholder="Crew Name" />
          {errors.cast?.crew?.name && touched.cast?.crew?.name && (
            <div className="text-red-500">{errors.cast.crew.name}</div>
          )}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MovieForm;
