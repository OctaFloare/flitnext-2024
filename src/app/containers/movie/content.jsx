import Link from "next/link";
import { useVideoContext } from "../play/context";
import { Crew } from "./crew";
import { Genres } from "./genres";

export const Content = ({data}) => {
    const { title, description, genres, cast, video_source: videoSource } = data;
    const { setVideoUrl } = useVideoContext();

    return <div>
        <h2>{title}</h2>
        <div>{description}</div>
        {genres && <Genres genres={genres}/>}
        {cast && cast.map(castMember => <div key={`${castMember.role}-${castMember?.crew[0]?.name}`}>
            <div>Role: {castMember.role}</div>
            <Crew crew={castMember.crew} />
        </div>)}
        <Link href={"/play"} onClick={() => setVideoUrl(videoSource)}>Watch Movie</Link>
    </div>
}