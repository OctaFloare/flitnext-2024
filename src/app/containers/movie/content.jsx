import Link from "next/link";
import { Crew } from "./crew";
import { Genres } from "./genres";

export const Content = ({data}) => {
    const { id, title, description, genres, cast } = data;
    
    return (
        <div className=" text-white min-h-screen flex flex-col items-center p-8">
            <div className="flex flex-col items-center max-w-screen-lg w-full">
                <h2 className="text-6xl font-bold mb-4">{title}</h2>
                <div className="text-xl mb-6 max-w-prose text-center">{description}</div>
                {genres && <Genres genres={genres}/>}
                <div className="flex flex-col items-start mt-6">
                    {cast && cast.map(castMember => (
                        <div key={`${castMember.role}-${castMember?.crew[0]?.name}`} className="flex flex-col mb-4">
                            <div className="font-semibold">Role: {castMember.role}</div>
                            <Crew crew={castMember.crew} />
                        </div>
                    ))}
                </div>
                <Link href={`/play/${id}`} className="mt-6 bg-[#45A29E] text-black py-2 px-4 rounded-full text-xl font-bold hover:text-[#66FCF1]">
                        Watch Movie
                </Link>
            </div>
        </div>
    );
}
