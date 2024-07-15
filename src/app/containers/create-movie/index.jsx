'use client'

import { FormField } from "@/components/formField";
import FormFieldArray from "@/components/formFieldArray";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    id: 0,
    title: '',
    description: '',
    genres: [{ id: 0, name: '' }],
    video_source: '',
    cast: [{ role: '', crew: [{ id: 0, name: '' }] }],
};

const validationSchema = Yup.object().shape({
    id: Yup.number().required('Id is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    genres: Yup.array().of(
        Yup.object().shape({
            id: Yup.number().required('Genre ID is required'),
            name: Yup.string().required('Genre name is required'),
        })
    ),
    video_source: Yup.string().required('Video source is required'),
    cast: Yup.array().of(
        Yup.object().shape({
            role: Yup.string().required('Role is required'),
            crew: Yup.array().of(
                Yup.object().shape({
                    id: Yup.number().required('Crew ID is required'),
                    name: Yup.string().required('Crew name is required'),
                })
            ),
        })
    ),
});

const createMovie = async (values) => {
    const response = await axios.post('/api/movies', values)

    return response.data
}

export const CreateMovie = () => {
    const { mutate, data, isSuccess, isError, error } = useMutation({
        mutationFn: createMovie, 
        mutationKey: ["create-movie"]
    })

    return <>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                mutate(values)
            }}
        >
            {({ values }) => (
                <Form className={"max-w-md mx-auto bg-gray-50 p-5 m-10 rounded-md mb-3"}>
                    <p className="text-black text-center font-semibold mb-2 text-2xl">CREATE MOVIE</p>
                    <FormField name={"id"} label={"Movie ID"} placeholder={"Id"} type={"number"}/>
                    <FormField name={"title"} label={"Title"} placeholder={"Title"} type={"text"}/>
                    <FormField name={"description"} label={"Description"} placeholder={"Description"} type={"text"}/>

                    <FormFieldArray
                        name="genres"
                        label="Genres"
                        fields={[
                            { name: 'id', label: 'Genre ID', placeholder: 'Genre ID', type: 'number' },
                            { name: 'name', label: 'Genre Name', placeholder: 'Genre Name', type: 'text' },
                        ]}
                        values={values.genres}
                        itemStructure={{ id: '', name: '' }}
                    />

                    <FormField name={"video_source"} label={"Video Source"} placeholder={"Video Source"} type={"text"} />

                    <div>
                        <label>Cast</label>
                        <FieldArray name="cast">
                            {({ remove, push }) => (
                                <div>
                                    {values.cast.map((cast, index) => (
                                        <div key={index} className={"border border-slate-300 mb-3 p-5 rounded-md"}>
                                            <FormField name={`cast.${index}.role`} label={"Role"} placeholder={"Role"} type={"text"}/>

                                            <FormFieldArray
                                                name={`cast.${index}.crew`}
                                                label="Crew"
                                                fields={[
                                                    { name: 'id', label: 'Crew ID', placeholder: 'Crew ID', type: 'number' },
                                                    { name: 'name', label: 'Crew Name', placeholder: 'Crew Name', type: 'text' },
                                                ]}
                                                values={cast.crew}
                                                itemStructure={{ id: '', name: '' }}
                                            />

                                            <button className={"w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"} type="button" onClick={() => remove(index)}>Remove Cast</button>
                                        </div>
                                    ))}
                                    <button className={"w-full mb-3 bg-[#45A29E] hover:bg-[#2A615F] text-white font-bold py-2 px-4 rounded"} type="button" onClick={() => push({ role: '', crew: [{ id: '', name: '' }] })}>Add Cast</button>
                                </div>
                            )}
                        </FieldArray>
                    </div>

                    <button className={"w-full mb-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"} type={"submit"} >Create movie</button>
                    {isError && <div className="text-red-600 mb-2">{error.message}</div>}
                    {isSuccess && <div className={"text-black"}>
                        Newly created movie
                        <p>This is id: {data.id}</p>
                        <p>This is movie name: {data.name}</p>
                    </div>}
                </Form>
            )}
        </Formik>
    </>

}