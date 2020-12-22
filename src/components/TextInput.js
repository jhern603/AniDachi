import { useField } from "formik";
import React from "react";

const TextInput = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={"input_field"}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      {/* <span>{props.name}</span> */}
      <input {...field} {...props} aria-label={props.label} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div style={{ "margin-top": "25px" }}></div>
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
      <textarea {...field} {...props} aria-label={props.label} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div style={{ "margin-top": "25px" }}></div>
      )}
    </div>
  );
};
export { TextInput, TextArea };
