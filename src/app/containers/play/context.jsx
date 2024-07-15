import { createContext, useContext, useState } from "react";

export const VideoContext = createContext("")

export const useVideoContext = () => useContext(VideoContext);

export const useValues = () => {
    const [videoUrl, setVideoUrl] = useState();

    return {
        videoUrl, 
        setVideoUrl
    }
}

