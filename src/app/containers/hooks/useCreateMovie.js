import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const createMovie = async (values) => {
    const response = await axios.post('/api/movies', values)
    return response.data
}

const useCreateMovie = () => {
    return useMutation({
        mutationFn: createMovie,
        mutationKey: ["create-movie"]
    });
}

export default useCreateMovie;