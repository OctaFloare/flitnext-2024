import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchMovie = async (id) => {
    const response = await axios.get(`/api/movie/${id}`)

    return response.data
}

export const useMovie = (id) => useQuery({
    queryKey: ["fetch-movie"],
    queryFn: () => fetchMovie(id)
})