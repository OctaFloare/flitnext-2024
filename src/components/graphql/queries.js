
import { gql } from 'graphql-request';

export const GET_MOVIES_QUERY = gql`
  query GetMovies($term: String, $first: Int, $after: String, $last: Int, $before: String) {
    movies(term: $term, first: $first, after: $after, last: $last, before: $before) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          id
          title
          description
          imageUrl
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
    }
  }
`;
