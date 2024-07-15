import { useMovie } from "./hooks/useMovie";

import React from "react";
export const DataFetcher = ({ id, render }) => {
  console.log(id);
  const { data, isError, isSuccess, error, isLoading } = useMovie(id);
  console.log(data);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isSuccess && data) return render(data);
};
