import { useGraphQLQuery } from "@/hooks/useGraphqlQuery";

const GET_MOVIES = `
query GetMovies ($term: String, $first: Int, $last: Int, $before: String, $after: String){
  movies(term: $term, first: $first, last: $last, before: $before, after: $after) {
    totalCount
    edges {
      cursor
      node {
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
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`

export const useMovies = () => {
  const { data, error, isError, isLoading, isSuccess } = useGraphQLQuery('get-movies', GET_MOVIES);

  return {
    data,
    error, 
    isError,
    isLoading,
    isSuccess,
  };
};
