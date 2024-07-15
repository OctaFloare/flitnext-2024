"use client";
import { useParams } from "next/navigation";
import { Content } from "../movie/content";
import { DataFetcher } from "./dataFetcher";

export const Movie = () => {
  const params = useParams();
  const { id } = params;

  return (
    <DataFetcher
      id={id}
      render={(data) => <Content data={data} />}
    ></DataFetcher>
  );
};
