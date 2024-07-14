import { Field } from "formik";

export const FormField = ({ label, placeholder, name, type, error }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <Field
      placeholder={placeholder}
      name={name}
      type={type}
      className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
        error ? "border-red-500" : ""
      }`}
    />
    {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
  </div>
);