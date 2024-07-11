'use client'

import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { CreateMovieForm } from "./createMovieForm"


const createMovie = async (values) => {
    console.log(values)
    const movie = {
        id: parseInt(values.id),
        title: values.title,
        description: values.description,
        genres: values.genres,
        video_source: values.video_source,
        cast: [values.cast],
      };
    const response = await axios.post('/api/movies', movie)

    return response.data
}

export const CreateMovie = () => {
    const { mutate, data, isSuccess, isError, error } = useMutation({
        mutationFn: createMovie, 
        mutationKey: ["create-movie"]
    })

    return <>
        <div className="flex items-center justify-center">
        <CreateMovieForm mutate={mutate} />
        </div>
       
        {isError && <div className="text-red-600">{error.message}</div>}
        
        {isSuccess && <div className="py-10 text-white flex flex-col items-center bg-[#45A29E] opacity-90">
            <h2 className="font-bold text-3xl py-5">Newly created movie!</h2>
            <p>This is the movie id: {data.id}</p>
            <p>This is the movie name: {data.title}</p>
            <p>This is the movie description: {data.description}</p>
            <p>This is the movie video_source: {data.video_source}</p>
            </div>}
    </>

}

