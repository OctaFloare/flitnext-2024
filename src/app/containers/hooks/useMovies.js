import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = async () => {
  const response = await axios.get('/api/movies');
  return response.data;
};

const GET_MOVIES = `
query {
  movies(first: 15) {
    edges {
      cursor
      node {
        id
        title
        description
        videoSource
        imageUrl
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
`;

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
