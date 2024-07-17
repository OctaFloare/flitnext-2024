import { useCreateMovie } from "../hooks/useCreateMovie";

export const useSubmitMovieForm = () => {
  const { mutate: handleFormSubmit, data, isSuccess, isError, error } = useCreateMovie();

  const onSubmit = (values) => {
    const transformedValues = transformFormValues(values);
    handleFormSubmit(transformedValues);
  };

  return { onSubmit, data, isSuccess, isError, error };
};

const transformFormValues = (values) => ({
  createMovieDto: {
    title: values.title,
    description: values.description,
    videoSource: values.video_source,
    imageUrl: values.image_source,
    genres: values.genres.map(genre => ({ name: genre.name })),
    casts: values.cast.map(castMember => ({
      role: castMember.role,
      name: castMember.crew[0].name
    }))
  }
});
