import { useGraphQLQuery } from "@/hooks/useGraphqlQuery";

const GET_MOVIE = `
query GetMovie($id: Int!) {
    movie(id: $id) {
        description
        id
        imageUrl
        title
        videoSource
        casts {
        id
        name
        role
        }
        genres {
        id
        name
        }
    }
}
`

export const useMovie = (_id) => {
    const { data, error, isError, isLoading, isSuccess } = useGraphQLQuery('get-movie', GET_MOVIE, {
        id: parseInt(_id),
    });

  return {
    data,
    error, 
    isError,
    isLoading,
    isSuccess,
  };
}