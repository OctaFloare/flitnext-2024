
import React from 'react';
import { Field, ErrorMessage } from 'formik';

export const FormField = ({ label, name, type = 'text' }) => 
<div className="formGroup">
    <label className='formLabel' htmlFor={name}>{label}</label>
    <Field className="input" type={type} id={name} name={name}/>
    <ErrorMessage name={name} component="div" style={{ color: 'red' }} />
</div>
