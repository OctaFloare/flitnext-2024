'use client'
import { CreateMovie } from "../containers/create-movie"


const CreateMoviePage = () => {

    return (
        <div >
          <h1 className="text-2xl font-bold mb-6 text-center">Create Movie</h1>
          <CreateMovie />
        </div>
      );
       
};

export default CreateMoviePage