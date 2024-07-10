import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMovies = () => {
  const fetchMovies = async () => {
    try {
      const response = await axios.get('/api/movies');
      if (Array.isArray(response.data)) {
        return response.data.map(movie => movie.name);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      throw new Error('Failed to fetch movies');
    }
  };

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['getMovies'],
    queryFn: fetchMovies,
  });

  return {
    data,
    isError,
    isLoading,
    isSuccess,
  };
};