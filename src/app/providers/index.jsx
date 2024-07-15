'use client'

import { useValues, VideoContext } from "../containers/play/context";
import { ReactQueryProvider } from "./reactQueryProvider";

export const Providers = ({ children }) => {
  const videoValues = useValues()

  return (
    <ReactQueryProvider>
      <VideoContext.Provider value={videoValues}>
        {children}
      </VideoContext.Provider>
    </ReactQueryProvider>
  );
};
