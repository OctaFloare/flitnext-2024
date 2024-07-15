export const ErrorDisplay = ({ errorMessage }) =>
    <div className="bg-gray-50 p-5 max-w-md rounded-md m-auto">
        <div className="text-red-600 font-semibold">
            {errorMessage}
        </div>
    </div>