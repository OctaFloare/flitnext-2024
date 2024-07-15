export const CreateMovieInfoMessage = ({ isError, isSuccess, error, data }) => {
    const { id, title } = data;

    return (
        <div className="bg-gray-50 p-5 max-w-md rounded-md m-auto">
            {isError && <div className="text-red-600 font-semibold">{error.message}</div>}
            {isSuccess && (
                <div className="text-green-600 font-semibold">
                    Newly created movie
                    <p>This is id: {id}</p>
                    <p>This is movie name: {title}</p>
                </div>
            )}
        </div>
    );
};