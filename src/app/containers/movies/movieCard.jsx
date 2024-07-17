import {Genres} from "@/app/containers/movie/genres";

export const MovieCard = ({ movie }) => {
    const {title, genres, imageUrl} = movie;
    return (
        <div className="max-w-[280px] h-full bg-gray-50 rounded-lg flex flex-col justify-between">
            <img className="rounded-md h-64"
                 src={imageUrl}
                 alt={title}/>
            <div className="p-5 flex flex-col flex-grow">
                <h5 className="mb-2 text-2xl font-bold text-black grow">
                    {title}
                </h5>
                <Genres genres={genres}/>
            </div>
        </div>
    )
}
