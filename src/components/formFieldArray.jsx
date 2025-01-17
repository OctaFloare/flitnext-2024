import {FieldArray} from "formik";
import {FormField} from "@/components/formField";

const FormFieldArray = ({ name, label, fields, values, itemStructure }) => {
    return (
        <div>
            <label>{label}</label>
            <FieldArray name={name}>
                {({ remove, push }) => (
                    <div>
                        {values.map((item, index) => (
                            <div key={index} className="border border-slate-300 mb-3 p-5 rounded-md">
                                {fields.map(({type, name: fieldName, label, fields, itemStructure, placeholder}, fieldIndex) => {
                                    if (type === 'array') {
                                        return (
                                            <FormFieldArray
                                                key={fieldIndex}
                                                name={`${name}.${index}.${fieldName}`}
                                                label={label}
                                                fields={fields}
                                                values={item[fieldName]}
                                                itemStructure={itemStructure}
                                            />
                                        );
                                    } else {
                                        return (
                                            <FormField
                                                key={fieldIndex}
                                                name={`${name}.${index}.${fieldName}`}
                                                label={label}
                                                placeholder={placeholder}
                                                type={type}
                                            />
                                        );
                                    }
                                })}
                                <button
                                    className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                    onClick={() => remove(index)}
                                >
                                    Remove {label}
                                </button>
                            </div>
                        ))}
                        <button
                            className="w-full mb-3 bg-[#45A29E] hover:bg-[#2A615F] text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={() => push(itemStructure)}
                        >
                            Add {label}
                        </button>
                    </div>
                )}
            </FieldArray>
        </div>
    );
};

export default FormFieldArray;