
import { gql } from 'graphql-request';

export const CREATE_MOVIE_MUTATION = gql`
  mutation CreateMovie($createMovieDto: CreateMovieInput!) {
    createMovie(createMovieDto: $createMovieDto) {
      id
      title
      description
      videoSource
      imageUrl
      genres {
        name
      }
      casts {
        name
        role
      }
    }
  }
`;

export const UPDATE_MOVIE_MUTATION = gql`
  mutation UpdateMovie($updateMovieDto: UpdateMovieInput!) {
    updateMovie(updateMovieDto: $updateMovieDto) {
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
`;

export const DELETE_MOVIE_MUTATION = gql`
  mutation DeleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      isSuccess
      message
    }
  }
`;
