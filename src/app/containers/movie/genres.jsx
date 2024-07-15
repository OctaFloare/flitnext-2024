import {Chip} from "@/components/mobileHeader/chip";

export const Genres = ({genres}) => <div className="flex-row flex gap-1">
    {genres.map(genre =>
        <Chip key={`${genre.id}-${genre.name}`} name={genre.name}></Chip>
    )}
</div>
