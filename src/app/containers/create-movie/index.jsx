"use client";

import { useMutation } from "@tanstack/react-query";
import { genres } from "./movie-data";
import axios from "axios";
import { Formik, Form, Field } from "formik";

const createMovie = async (movieData) => {
  const response = await axios.post("/api/movies", movieData);

  return response.data;
};

const initialValues = {
  title: "",
  description: "",
  genres: {
    id: "",
    name: "",
  },
  videoSource: "",
  cast: {
    role: "",
    crew: {
      id: "",
      name: "",
    },
  },
};
export const CreateMovie = () => {
  const { mutate, data, isSuccess, isError, error } = useMutation({
    mutationFn: createMovie,
    mutationKey: ["create-movie"],
  });

  return (
    <>
      {isError && <div className="text-red-600">{error.message}</div>}
      <Formik
        initialValues={initialValues}
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
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col space-y-4 items-center w-full">
            <Field type="text" name="title" placeholder="Title" />
            <Field type="text" name="description" placeholder="Description" />
            <Field
              as="select"
              name="genres.id"
              onChange={(e) => {
                const selectedGenre = genres.find(
                  (genre) => genre.id.toString() === e.target.value,
                );
                setFieldValue(
                  "genres.id",
                  selectedGenre ? selectedGenre.id : "",
                );
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
            <Field type="text" name="videoSource" placeholder="Video Source" />
            <Field type="text" name="cast.role" placeholder="Cast Role" />
            <Field type="text" name="cast.crew.id" placeholder="Crew ID" />
            <Field type="text" name="cast.crew.name" placeholder="Crew Name" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <button onClick={() => mutate()}>Create movie</button>
      {isSuccess && (
        <div>
          Newly created movie
          <p>This is id: {data.id}</p>
          <p>This is movie name: {data.name}</p>
        </div>
      )}
    </>
  );
};
