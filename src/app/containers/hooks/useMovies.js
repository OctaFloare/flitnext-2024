import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = async () => {
  const response = await axios.get('/api/movies');
  return response.data;
};

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
  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['get-movies'],
    queryFn: fetchMovies 
  })

  return {
    data,
    error, 
    isError,
    isLoading,
    isSuccess,
  };
};
