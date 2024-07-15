import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchVideoUrl = async (id) => {
    const response = await axios.get(`/api/movie/${id}`)

    return response.data
}

export const useVideoUrl = (id) => useQuery({
    queryKey: ["fetch-video-url"],
    queryFn: () => fetchVideoUrl(id)
})