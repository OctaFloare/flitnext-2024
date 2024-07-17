import { useGraphQLQuery } from "@/hooks/useGraphqlQuery";


const CREATE_MOVIE = `
mutation AddMovie($input: DMovieCreateInput!) {
  addMovie(input: $input) {
    description
    id
    imageUrl
    title
    videoSource
    genres {
      id
      name
    }
    casts {
      id
      name
      role
    }
  }
}
`

export const useCreateMovie = (movieCreateInput) => {
    const { data, error, isError, isLoading, isSuccess } = useGraphQLQuery('get-movie', GET_MOVIE, {
        input: movieCreateInput,
    });

  return {
    data,
    error, 
    isError,
    isLoading,
    isSuccess,
  };
}