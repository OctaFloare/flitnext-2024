"use client";

import { Video } from "./Video";
import { useParams } from "next/navigation";
import { useMovie } from "../movie/hooks/useMovie";

export const MovieUrl = () => {
  const params = useParams();
  const { id } = params;
  const { data, isError, isSuccess, error, isLoading } = useMovie(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movie: {error.message}</div>;
  }

  if (!data) {
    return <div>No movie found.</div>;
  }
  if (isSuccess && data) {
    const { video_source } = data;
    return <Video videoUrl={video_source} />;
  }

  return null;
};
