'use client'

import {Formik} from "formik";
import useCreateMovie from "@/app/containers/hooks/useCreateMovie";
import {validationSchema} from "@/app/containers/create-movie/validationSchema";
import {CreateMovieInfoMessage} from "@/app/containers/create-movie/createMovieInfoMessage";
import {MovieForm} from "@/app/containers/create-movie/movieForm";

const initialValues = {
    id: 0,
    title: '',
    description: '',
    genres: [{ id: 0, name: '' }],
    video_source: '',
    cast: [{ role: '', crew: [{ id: 0, name: '' }] }],
};

export const CreateMovie = () => {
    const { mutate: handleFormSubmit, data, isSuccess, isError, error } = useCreateMovie();

    return <>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
        >
            {({ values }) => (
                <div>
                    <MovieForm values={values}/>
                    {data && <CreateMovieInfoMessage isError={isError} isSuccess={isSuccess} error={error} data={data} />}
                </div>
            )}
        </Formik>
    </>

}