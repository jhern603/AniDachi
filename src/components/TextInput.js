import { useField } from "formik";
import React from "react";
import styled from "styled-components";
import * as theme_color from "styles/variables";

// Exported Components
export const TextInput = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <InputField>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <InputSyled {...field} {...props} aria-label={props.label} tabIndex="0" />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div style={{ "margin-top": "25px" }}></div>
      )}
    </InputField>
  );
};

export const TextArea = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <TextAreaStyled {...field} {...props} aria-label={props.label} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

// Component Styles
const InputSyled = styled.input`
  color: ${theme_color.primary_color};
  background: none;
  border: none;
  border-bottom: 0.1rem solid ${theme_color.primary_color};
  width: 50vw;
  &:focus {
    border-bottom: 0.1rem solid ${theme_color.focus_color};
  }
`;

const TextAreaStyled = styled.textarea`
  min-height: 4rem;
  color: ${theme_color.primary_color};
  resize: vertical;
  background: none;
  border: none;
  border-bottom: 0.1rem solid ${theme_color.primary_color};
  transition: none;
  width: 50vw;
  height: 10rem;
  &:focus {
    border-bottom: 0.1rem solid ${theme_color.focus_color};
  }
`;

const InputField = styled.div`
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;
