'use client'

import { useVideoContext } from "./context"

export const Video = () => {
    const { videoUrl } = useVideoContext()
    console.log(videoUrl)

    return <div className="flex justify-center items-center h-full">
    <video className="w-[600px] h-[400px]" controls>
        <source src={videoUrl} type="video/mp4"></source>
        Your browser does not support the video tag.
    </video>
    </div>
}