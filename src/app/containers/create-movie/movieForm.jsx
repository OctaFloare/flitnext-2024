"use client";
import React from "react";
import { Formik, Form } from "formik";
import { FormField } from "./FormField";
import * as yup from "yup"

const initialValues = {
  title: "",
  description: "",
  genres: {
    id: "",
    name: "",
  },
  cast: {
    role: "",
    crew: {
      id: "",
      nae: "",
    },
  },
};

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  genres: yup.object().shape({
    id: yup.number().required("Genre ID is required"),
    name: yup.string().required("Genre name is required"),
  }),
  cast: yup.object().shape({
    role: yup.string().required("Cast role is required"),
    crew: yup.object().shape({
      id: yup.number().required("Crew ID is required"),
      name: yup.string().required("Crew name is required"),
    }),
  }),
});

const MovieForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {({ errors }) => (
        <Form>
          <FormField
            label="Title"
            name="title"
            type="text"
            error={errors.title}
          />
          <FormField
            label="Description"
            name="description"
            type="text"
            error={errors.description}
          />
          <FormField
            label="Genre ID"
            name="genres.id"
            type="Number"
            error={errors.genres?.id}
          />
          <FormField
            label="Genre Name"
            name="genres.name"
            type="text"
            error={errors.genres?.name}
          />
          <FormField
            label="Cast Role"
            name="cast.role"
            type="text"
            error={errors.cast?.role}
          />
          <FormField
            label="Crew ID"
            name="cast.crew.id"
            type="Number"
            error={errors.cast?.crew?.id}
          />
          <FormField
            label="Crew Name"
            name="cast.crew.name"
            type="text"
            error={errors.cast?.crew?.name}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MovieForm;
