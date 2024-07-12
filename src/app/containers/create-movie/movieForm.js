import React from 'react';
import { FormField } from './formField';
import { Form } from 'formik';
import '../styles/formStyle.css';

export const MovieForm = () =>
<>
   <Form className="form">
        <h1>Create Movie</h1>
        <FormField label="Movie ID:" name="movieId"/>
        <FormField label="Movie Name:" name="movieName" />
        <button className="button" type="submit">Submit</button>
    </Form>
</>
