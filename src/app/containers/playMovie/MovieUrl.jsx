"use client";

import { Video } from "./Video";
import { useParams } from "next/navigation";
import { DataFetcher } from "../movie/dataFetcher";

export const MovieUrl = () => {
  const params = useParams();
  const { id } = params;
  return (
    <DataFetcher
      id={id}
      render={(data) => <Video videoUrl={data.video_source} />}
    ></DataFetcher>
  );
};
