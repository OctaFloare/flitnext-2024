import * as Yup from "yup";

export const movieValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(2, "Title must be at least 2 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),
  genres: Yup.object().shape({
    id: Yup.number().required("Genre is required"),
  }),
  videoSource: Yup.string().required("Video source is required"),
  cast: Yup.object().shape({
    role: Yup.string().required("Role is required"),
    crew: Yup.object().shape({
      id: Yup.number()
        .required("Crew ID is required")
        .positive("Crew ID must be positive"),
      name: Yup.string().required("Crew name is required"),
    }),
  }),
});
