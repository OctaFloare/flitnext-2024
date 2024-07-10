import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = async () => {
  const response = await axios.get('/api/movies');
  return response.data;
};

export const useMovies = () => {
  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['getMovies'],
    queryFn: fetchMovies,
  });

  return {
    data,
    error, 
    isError,
    isLoading,
    isSuccess,
  };
};
