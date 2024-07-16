export const Genres = ({genres}) => <div className="flex-row flex gap-4">
    {genres.map(genre => <div key={`${genre.id}-${genre.name}`} >
            <div className="bg-gray-800 text-white py-1 px-3 rounded-full">{genre.name}</div>
        </div>)}
</div>