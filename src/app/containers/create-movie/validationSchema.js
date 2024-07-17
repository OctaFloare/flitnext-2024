import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    id: Yup.number().required('Title is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    genres: Yup.array().of(
        Yup.object().shape({
            id: Yup.number().required('Genre ID is required'),
            name: Yup.string().required('Genre name is required'),
        })
    ),
    video_source: Yup.string().required('Video source is required'),
    image_source: Yup.string().required('Image source is required'),
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