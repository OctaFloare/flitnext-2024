import {Genres} from "@/app/containers/movie/genres";

export const MovieCard = ({ movie }) => {
    const {title, genres} = movie;
    return (
        <div className="max-w-[280px] h-full bg-gray-50 rounded-lg flex flex-col justify-between">
            <img className="rounded-md h-64"
                 src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
