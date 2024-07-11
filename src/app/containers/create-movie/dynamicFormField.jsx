  import { FieldArray } from 'formik';
  import {FormField} from './formField';

  export const DynamicFormField = ({ name, label, fields, values, nestedFields, nestedIndex}) => (
  <>
   <FieldArray name={name}>
      {({ remove, push }) => (
        <div className="w-full mt-4 py-5">
          <h3 className="text-xl text-white font-semibold mb-2">{label}</h3>
          {(values[name]||[]).map((_item, index) => (
            <div key={`${index}.${nestedIndex}`} className="w-full mb-4 text-black flex items-center space-x-2">
              {fields.map(([fieldLabel, fieldName]) => (
                <div key={`${name}.${index}.${fieldName}.${nestedIndex}`} className="flex-grow">
                  <FormField
                      key={`${name}.${index}.${fieldName}.${nestedIndex}`}
                      label={fieldLabel}
                      name={`${name}.${index}.${fieldName}.${nestedIndex}`}
                      type="text"
                  />
                </div>
              ))}

              {nestedFields && nestedFields.map((nestedField,nestedIndex) => (
                <div key={`${name}.${index}.${nestedIndex}.${nestedField.name}`} className="w-full">
                  <DynamicFormField
                    key={`${name}.${index}.${nestedIndex}`}
                    nestedIndex={`${index}.${nestedIndex}`}
                    name={nestedField.name}
                    label={nestedField.label}
                    fields={nestedField.fields}
                    values={values}
                  />
                </div>
                        ))}
                <button type="button" className="px-3 py-5 bg-[#66FCF1] text-white rounded" onClick={() => remove(index)}>X</button>
                </div>
          ))}
          <div className="flex justify-end">
              <button type="button" className="bg-[#45A29E] text-white rounded px-4 py-2" onClick={() => push(fields.reduce((acc, [fieldLabel, fieldName]) => ({ ...acc, [fieldName]: '' }), {}))}>
                  Add {label}
              </button>
          </div>
        </div>
        
      )}
    </FieldArray>
    
  </>
   
    
  );

