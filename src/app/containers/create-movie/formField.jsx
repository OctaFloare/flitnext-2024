import { Field } from "formik"

export const FormField = ({ label, placeholder, name, type, error }) => {
    const nameParts = name.split('.');
  
    let transformedName =  nameParts[1] != undefined?`${nameParts[0]}[${nameParts[1]}].${nameParts[2]}`:`${nameParts[0]}`;
    if(nameParts[0] == "crew"){
      transformedName = `cast[${nameParts[3]}].crew[${nameParts[1]}].${nameParts[2]}`;
    }

    return (
        <div className="w-1/2 mb-4">
            <label className="text-white font-medium mb-1">{label}</label>
            <Field
                placeholder={placeholder}
                name={transformedName}
                type={type}
                className="field w-full p-2 border border-gray-300 rounded"
            />
            {error && <div className="field-error text-red-500 mt-1">{error}</div>}
        </div>
    );
};
