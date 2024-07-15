export const SuccessDisplay = ({ data: {id, title} }) =>
    <div className="bg-gray-50 p-5 max-w-md rounded-md m-auto">
        <div className="text-green-600 font-semibold">
            Newly created movie
            <p>This is id: {id}</p>
            <p>This is movie name: {title}</p>
        </div>
    </div>