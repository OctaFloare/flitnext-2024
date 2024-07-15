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
        return <Content data={data}/> 
    }

    return null
}