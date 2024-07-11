'use client'

import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const createMovie = async () => {
    const response = await axios.post('/api/movies', {id: 7, name: "Dune" })

    return response.data
}

export const CreateMovie = () => {
    const { mutate, data, isSuccess, isError, error } = useMutation({
        mutationFn: createMovie, 
        mutationKey: ["create-movie"]
    })

    return <>
        {isError && <div className="text-red-600">{error.message}</div>}
        <button onClick={() => mutate()}>Create movie</button>
        {isSuccess && <div>
            Newly created movie
            <p>This is id: {data.id}</p>
            <p>This is movie name: {data.name}</p>
            </div>}
    </>

}