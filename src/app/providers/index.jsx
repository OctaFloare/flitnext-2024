'use client'
import { ReactQueryProvider } from "./reactQueryProvider";

export const Providers = ({ children }) => {
  return (
    <ReactQueryProvider>
        {children}
    </ReactQueryProvider>
  );
};
