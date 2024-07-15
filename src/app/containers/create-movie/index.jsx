'use client'

import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState, useEffect } from "react"

const initialValues = {
    id: null,
    name: ''
}

const validationSchema = yup.object().shape({
    id: yup.number().required().positive().integer(),
    name: yup.string().required(),
});

const createMovie = async (values) => {
    const response = await axios.post('/api/movies', values)
    return response.data
}

export const CreateMovie = () => {
    const { mutate, data, isSuccess, isError, error } = useMutation({
        mutationFn: createMovie
    })

    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        let timer;
        if (isSuccess) {
            timer = setTimeout(() => {
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                }, 2000); 
            }, 500); 
        }
        return () => clearTimeout(timer);
    }, [isSuccess]);

    return (
        <>
            {isError && <div className="text-red-600">{error.message}</div>}
            <Formik 
                initialValues={initialValues} 
                onSubmit={(values) => mutate(values)}
                validationSchema={validationSchema}
            >
                {({ errors }) => (
                    <Form className="flex items-center justify-center p-20">
                        <div className="bg-[#1f2833] bg-opacity-80 p-6 rounded shadow-2xl max-w-md w-full">
                            <div className="mb-4">
                                <label htmlFor="id" className="block text-[#c5c6c7] font-bold mb-2">Id</label>
                                <Field 
                                    name="id" 
                                    type="number" 
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.id && 'border-red-500'}`}
                                />
                                <ErrorMessage name="id" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-[#c5c6c7] font-bold mb-2">Name</label>
                                <Field 
                                    name="name" 
                                    type="text" 
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name && 'border-red-500'}`}
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button 
                                    type="submit" 
                                    className="bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Create movie
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            {isSuccess && showSuccess && (
                <div className="fixed bottom-10 inset-x-0 mx-auto bg-green-600 text-white p-5 rounded shadow-2xl w-80">
                    <div className="text-center">
                        <h2 className="font-bold text-lg mb-2">Newly created movie</h2>
                    </div>
                    <div className="text-center">
                        <p className="m-2">Id: {data.id}</p>
                        <p className="m-2">Name: {data.name}</p>
                    </div>
                </div>
            )}
        </>
    )
}