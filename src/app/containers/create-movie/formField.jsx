import { Field } from "formik";

export const FormField = ({ label, placeholder, name, type, error }) => (
  <>
    <label>{label}</label>
    <Field
      placeholder={placeholder}
      name={name}
      type={type}
      className="pokemon-field"
    />
    {error && <div className="pokemon-field-error">{error}</div>}
  </>
);
