import Link from "next/link";
import { Crew } from "./crew";
import { Genres } from "./genres";
import {Cast} from "@/app/containers/movie/cast";

export const Content = ({data}) => {
    const { id, title, description, genres, cast } = data;

    return <div className="p-5">
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        <div className="mb-8">
            {genres && <Genres genres={genres}/>}
        </div>
        <div className="max-w-[500px] mb-6">{description}</div>

        <h5 className="text-lg mb-2">Cast:</h5>
        {cast && <Cast cast={cast}/>}
        <Link href={`/play/${id}`}>
            <button className="px-4 py-2 mt-6 bg-[#45A29E] hover:bg-[#2A615F] text-white rounded">Watch Movie</button>
        </Link>
    </div>
}
