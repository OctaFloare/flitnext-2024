import { useGraphQLMutation } from "@/hooks/useGraphqlMutation";
import { CREATE_MOVIE_MUTATION } from "@/components/graphql/mutations";

export const useCreateMovie = () => {
    return useGraphQLMutation('create-movie', CREATE_MOVIE_MUTATION);
};
