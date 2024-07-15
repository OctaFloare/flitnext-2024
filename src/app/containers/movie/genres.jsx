export const Genres = ({ genres }) => (
    <div className="flex flex-row gap-1 mb-4">
        Genre:
      {genres.map(genre => (
        <div key={`${genre.id}-${genre.name}`} className="text-gray-200">
          <div>{genre.name}</div>
        </div>
      ))}
    </div>
  );
  