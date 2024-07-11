export const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Drama" },
  { id: 4, name: "Fantasy" },
  { id: 5, name: "Horror" },
];

export const initialValues = {
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
