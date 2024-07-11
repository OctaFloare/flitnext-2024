import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const createMovie = async (movieData) => {
  const response = await axios.post('/api/movies', movieData);
  return response.data;
};

export const useCreateMovie = () => {
  return useMutation({
    mutationKey: ['create-movie'],
    mutationFn: createMovie,
  });
};
