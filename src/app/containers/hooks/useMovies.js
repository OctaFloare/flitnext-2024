
import { GET_MOVIES_QUERY } from "@/components/graphql/queries";
import { useGraphQLQuery } from "@/hooks/useGraphqlQuery";

export const useMovies = (variables) => {
  const { data, error, isError, isLoading, isSuccess } = useGraphQLQuery('get-movies', GET_MOVIES_QUERY, variables);

  return {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
  };
};
