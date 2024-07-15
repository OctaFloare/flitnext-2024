export const Genres = ({genres}) => <div className="flex-row flex gap-4">
    {genres.map(genre => <div key={`${genre.id}-${genre.name}`} >
            <div>{genre.name}</div>
        </div>)}
</div>