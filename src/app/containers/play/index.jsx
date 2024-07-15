'use client';

import { useMovie } from "../movie/hooks/useMovie";
import { useParams } from 'next/navigation';

export const Video = () => {
    const params = useParams();
    const { id } = params;
    const { data, error, isError, isLoading, isSuccess } = useMovie(id);

    const videoUrl = data?.video_source;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-xl text-gray-500">Loading...</div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-xl text-red-500">{error.message}</div>
            </div>
        );
    }

    if (isSuccess && videoUrl) {
        return (
            <div className="flex justify-center items-center h-screen">
                <video className="w-[90%] max-w-4xl h-auto rounded-md shadow-lg" controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }

    return null;
};
