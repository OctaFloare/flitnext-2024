"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const ReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  console.log(queryClient);
  console.log(children);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
