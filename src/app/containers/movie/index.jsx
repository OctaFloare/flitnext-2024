'use client'

import { useParams } from 'next/navigation';
import { Content } from '../movie/content';
import { useMovie } from './hooks/useMovie';

export const Movie = () => {
    const params = useParams();
    const { id } = params
    const { data, isError, isSuccess, error, isLoading} = useMovie(id)

    if(isLoading){
        return <div>Loading....</div>
    }

    if(isError){
        return <div>{error.message}</div>
    }

    if(isSuccess && data){
        return (
            <div className="flex flex-col lg:flex-row gap-20 items-center justify-center">
            <img className="rounded-md h-[400px] w-[300px]"
                 src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt={data?.movie.title}/>
            <Content data={data.movie}/>
            </div>
        )
    }

    return null
}
