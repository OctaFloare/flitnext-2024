import Link from "next/link";
import { Crew } from "./crew";
import { Genres } from "./genres";

export const Content = ({ data }) => {
  const { id, title, description, genres, cast } = data;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      <div className="text-gray-200 mb-4">{description}</div>
      {genres && <Genres genres={genres} />}
      {cast && cast.map(castMember => (
        <div key={`${castMember.role}-${castMember?.crew[0]?.name}`} className="mt-4">
          <div className="text-lg font-semibold text-white">Role: {castMember.role}</div>
          <Crew crew={castMember.crew} />
        </div>
      ))}
      <Link href={`/play/${encodeURIComponent(id)}`} className="mt-4 inline-block text-lg text-blue-500 hover:underline">
        Watch Movie
      </Link>
    </div>
  );
}
