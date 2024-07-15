import Link from "next/link";
import { Crew } from "./crew";
import { Genres } from "./genres";

export const Content = ({data}) => {
    const { id, title, description, genres, cast, video_source: videoSource } = data;
    console.log(data + "din content")
    return <div>
        <h2>{title}</h2>
        <div>{description}</div>
        {genres && <Genres genres={genres}/>}
        {cast && cast.map(castMember => <div key={`${castMember.role}-${castMember?.crew[0]?.name}`}>
            <div>Role: {castMember.role}</div>
            <Crew crew={castMember.crew} />
        </div>)}
        <Link href={`/play/${id}`} >Watch Movie</Link>
    </div>
}