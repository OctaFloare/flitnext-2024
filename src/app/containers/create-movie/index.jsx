'use client'

import {Formik} from "formik";
import useCreateMovie from "@/app/containers/hooks/useCreateMovie";
import {validationSchema} from "@/app/containers/create-movie/validationSchema";
import {MovieForm} from "@/app/containers/create-movie/movieForm";
import {ErrorDisplay} from "@/app/containers/create-movie/errorDisplay";
import {SuccessDisplay} from "@/app/containers/create-movie/successDisplay";

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
                    {isError && <ErrorDisplay errorMessage={error.message} />}
                    {isSuccess && <SuccessDisplay data={data} />}
                </div>
            )}
        </Formik>
    </>

}