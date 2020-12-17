import { useField } from "formik";
import React from "react";

const TextInput = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={"input_field"}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      {/* <span>{props.name}</span> */}
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div className="transparent_text">This is the Hialeah workaround</div>
      )}
    </div>
  );
};
const TextArea = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={"input_textarea"}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      {/* <span>{props.name}</span> */}
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div className="transparent_text">This is the Hialeah workaround</div>
      )}
    </div>
  );
};
export default TextInput;
export { TextArea };
