import { CreateMovie } from "../containers/create-movie";

const CreateMoviePage = () => {
    return (
        <div>
            <div className="flex flex-col items-center w-full">
                <h1 className="text-white text-center mt-8 mb-4 text-5xl">Create Movie</h1>
            </div>
            <CreateMovie />
        </div>
    );
}

export default CreateMoviePage;
