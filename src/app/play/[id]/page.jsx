"use client";

import { useParams } from "next/navigation";
import { useMovie } from "@/app/containers/movie/hooks/useMovie";
import { Video } from "@/app/containers/play";

const PlayPage = () => {
  const { id } = useParams();
  const { data, isError, isSuccess, error, isLoading } = useMovie(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isSuccess && data) {
    return <Video videoUrl={data.video_source} />;
  }

  return null;
};

export default PlayPage;
