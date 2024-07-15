import Link from "next/link";
import Image from "next/image";
import { useVideoContext } from "../play/context";
import { Crew } from "./crew";
import { Genres } from "./genres";

export const Content = ({ data }) => {
  const {
    title,
    description,
    genres,
    cast,
    video_source: videoSource,
    photo,
  } = data;
  const { setVideoUrl } = useVideoContext();

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      <Image
        src={photo}
        alt="Movie Poster"
        className="w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
        width={200}
        height={200}
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="text-gray-400 mb-6 w-50">{description}</div>
        {genres && (
          <div className="mb-4">
            <Genres genres={genres} />
          </div>
        )}
        {cast && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {cast.map((castMember) => (
              <div
                key={`${castMember.role}-${castMember?.crew[0]?.name}`}
                className="bg-gray-700 p-4 rounded-lg"
              >
                <Crew crew={castMember.crew} />
                <div className="font-semibold">Role: {castMember.role}</div>
              </div>
            ))}
          </div>
        )}
        <Link
          href={"/play"}
          className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
          onClick={() => setVideoUrl(videoSource)}
        >
          Watch Movie
        </Link>
      </div>
    </div>
  );
};
