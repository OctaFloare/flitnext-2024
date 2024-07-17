import { useQuery } from "@tanstack/react-query";
import { GraphQLClient } from 'graphql-request';

const port = "7013";
const endpoint = `https://localhost:${port}/graphql`;

const graphqlClient = new GraphQLClient(endpoint);

export const useGraphQLQuery = (queryKey, query, variables) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      try {
        const data = await graphqlClient.request(query, variables);
        return data;
      } catch (error) {
        console.error("GraphQL request error:", error);

        if (error.response) {

          throw new Error(`Server responded with an error: ${error.response.status} ${error.response.statusText}`);
        } else if (error.request) {

          throw new Error('No response received from server');
        } else {
          throw new Error(`Error occurred: ${error.message}`);
        }
      }
    },
    onError: (error) => {
      console.error("useQuery error:", error);
    } 
  });
};
