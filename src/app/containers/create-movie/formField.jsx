import { Field } from "formik"

export const FormField = ({ label, placeholder, name, type, error }) => (
        <div className="w-1/2 mb-4">
            <label className="text-white font-medium mb-1">{label}</label>
            <Field
                placeholder={placeholder}
                name={name}
                type={type}
                className="field w-full p-2 border border-gray-300 rounded"
            />
            {error && <div className="field-error text-red-500 mt-1">{error}</div>}
        </div>
    );
