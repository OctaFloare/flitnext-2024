import React from 'react';

const FormField = ({ id, label, formik }) => (
  <div className="formGroup">
    <label className='formLabel' htmlFor={id}>{label}</label>
    <input
      id={id}
      name={id}
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[id]}
      className="input"
    />
    {formik.touched[id] && formik.errors[id] ? (
      <div className="text-red-500 text-sm mt-1">{formik.errors[id]}</div>
    ) : null}
  </div>
);

export default FormField;