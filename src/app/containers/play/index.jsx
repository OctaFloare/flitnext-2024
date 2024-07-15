'use client'

import { useMovie } from "../movie/hooks/useMovie";
import { useParams } from 'next/navigation';


export const Video = () => {
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
        console.log(data)
        const videoUrl = data.video_source
        console.log(videoUrl)
        return <div className="flex justify-center items-center h-full">
        <video className="w-[600px] h-[400px]" controls>
            <source src={videoUrl} type="video/mp4"></source>
            Your browser does not support the video tag.
        </video>
        </div>
    }

    return null
}