import { Formik, Form } from "formik"
import {FormField} from "./formField"
import {DynamicFormField} from "./dynamicFormField"
import * as yup from "yup"

const initialValues = {
    id: '',
    title: '',
    description: '',
    genres: [{ id: '', name: '' }],
    video_source: '',
    cast: [{ role: '', crew: [{ id: '', name: '' }] }],
  };

  const validationSchema = yup.object().shape({
    id: yup.number().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    video_source: yup.string().url().required()
})
export const CreateMovieForm = ({mutate}) => (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({ values, errors }) => (
      <Form className="w-1/2 flex flex-col items-center mt-8">
        <FormField label="Movie ID" name="id" type="text" error={errors.id}/>
        <FormField label="Movie Title" name="title" type="text" error={errors.title}/>
        <FormField label="Movie Description" name="description" type="text" error={errors.description}/>
        <FormField label="Movie Video Source" name="video_source" type="text" error={errors.video_source}/>
        <DynamicFormField name="genres" label="Genre" fields={[['ID', 'id'], ['Name', 'name']]} values={values}/>
        <DynamicFormField name="cast" label="Cast" fields={[['Role', 'role']]}
          values={values}
          nestedFields={[{ name: 'crew', label: 'Crew', fields: [['ID', 'id'], ['Name', 'name']] }]}/>
        <button className="w-1/2 px-4 py-2 bg-[#0B0C10] text-white rounded" type="submit" onClick={() => mutate(values)}>
                Create movie
        </button>
        </Form>
              )}
        </Formik>
)