import Link from "next/link";
import {MovieCard} from "@/app/containers/movies/movieCard";

export const MovieGrid = ({ data }) =>
    <div className="w-[80%] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-x-4 gap-y-12 items-start">
            {data.movies.edges.map(edge => (
                <div key={`${edge.node.id}-${edge.node.title}`} className="w-full h-full flex justify-center">
                    <Link href={`/movie/${encodeURIComponent(edge.node.id)}`}>
                        <MovieCard movie={edge.node} />
                    </Link>
                </div>
            ))}
        </div>
    </div>
