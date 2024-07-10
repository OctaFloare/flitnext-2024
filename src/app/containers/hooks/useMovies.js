import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: "getMovies",
    queryFn: () => axios.get(""),
  });

  const movies = data ? data.data : [];

  return {
    data: movies,
    isError,
    isLoading,
    isSuccess,
  };
};
