import {ErrorMessage, Field} from "formik";

export const FormField = ({ label, placeholder, name, type}) => <>
    <div className="mb-3">
        <label className="block mb-2 text-sm font-medium text-black">{label}</label>
        <Field  placeholder={placeholder} name={name} type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
        <ErrorMessage className="mt-2 text-sm text-red-600 dark:text-red-500" name={name} component="div" />
    </div>
</>