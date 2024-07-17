import {FormField} from "@/components/formField";
import FormFieldArray from "@/components/formFieldArray";
import {Form} from "formik";

const genreFields = [
    { name: 'id', label: 'Genre ID', placeholder: 'Genre ID', type: 'number' },
    { name: 'name', label: 'Genre Name', placeholder: 'Genre Name', type: 'text' },
];

const castFields = [
    { name: 'role', label: 'Cast Role', placeholder: 'Cast Role', type: 'text' },
    {
        name: 'crew',
        label: 'Crew',
        type: 'array',
        fields: [
            { name: 'id', label: 'Crew ID', placeholder: 'Crew ID', type: 'number' },
            { name: 'name', label: 'Crew Name', placeholder: 'Crew Name', type: 'text' },
        ],
        itemStructure: { id: '', name: '' },
    },
];

export const MovieForm = ({values}) =>
        <Form className={"max-w-md mx-auto bg-gray-50 p-5 m-10 rounded-md mb-3"}>
            <FormField name={"id"} label={"Movie ID"} placeholder={"Id"} type={"number"}/>
            <FormField name={"title"} label={"Title"} placeholder={"Title"} type={"text"}/>
            <FormField name={"description"} label={"Description"} placeholder={"Description"} type={"text"}/>

            <FormFieldArray
                name="genres"
                label="Genres"
                fields={genreFields}
                values={values.genres}
                itemStructure={{ id: '', name: '' }}
            />

            <FormField name={"video_source"} label={"Video Source"} placeholder={"Video Source"} type={"text"} />
            <FormField name={"image_source"} label={"Image Source"} placeholder={"Image Source"} type={"text"} />

            <FormFieldArray
                name="cast"
                label="Cast"
                fields={castFields}
                values={values.cast}
                itemStructure={{ id: '', name: '', crew: [] }}
            />

            <button className={"w-full mb-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"} type={"submit"} >Create movie</button>
        </Form>
