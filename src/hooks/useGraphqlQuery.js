import { useQuery } from "@tanstack/react-query";
import { GraphQLClient } from 'graphql-request';

const port = "5173"

const endpoint = `http://localhost:${port}/graphql`

const graphqlClient = new GraphQLClient(endpoint);

export const useGraphQLQuery = (queryKey, query, variables) => {
    return useQuery(
        { queryKey, 
          queryFn:  async () => {
      const data = await graphqlClient.request(query, variables);
      return data;
    }})};