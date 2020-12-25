import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput, TextArea } from "./TextInput";
import { Link } from "react-router-dom";
import * as theme_color from "styles/variables";
import styled from "styled-components";

// Exported Components
export const ContactForm = () => {
  const formSchema = Yup.object().shape({
    title: Yup.string().required(),
    content: Yup.string().required(),
    email: Yup.string().email().required("Please Enter a Valid Email"),
  });
  return (
    <FormContainer>
      <FormHeader>Contact Us!</FormHeader>

      <Formik
        initialValues={{
          title: "",
          email: "",
          content: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log("pressed");
        }}
      >
        {({ handleSubmit }) => {
          return (
            <FormArea onSubmit={handleSubmit}>
              <TextInput name={"title"} placeholder={"Title..."} />
              <TextInput name={"email"} placeholder={"Email..."} />

              <TextArea
                className="textarea_input"
                name={"content"}
                placeholder={"Content..."}
              />
              <button className="login_button" type={"submit"}>
                Send Message
              </button>
            </FormArea>
          );
        }}
      </Formik>
    </FormContainer>
  );
};
export const RegisterForm = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string().email().required("Please Enter a Valid Email"),
    first_name: Yup.string().required("Enter your first name"),
    last_name: Yup.string().required("Enter your last name"),
    password: Yup.string().required().min(8).max(12),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  return (
    <FormContainer>
      <FormHeader>register now</FormHeader>
      <Formik
        initialValues={{
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          confirm_password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log("pressed");
        }}
      >
        {({ handleSubmit }) => {
          return (
            <FormArea onSubmit={handleSubmit}>
              <TextInput
                className="text_input"
                name={"email"}
                placeholder={"Email..."}
              />
              <TextInput
                className="text_input"
                name={"first_name"}
                placeholder={"First Name..."}
              />
              <TextInput
                className="text_input"
                name={"last_name"}
                placeholder={"Last Name..."}
              />
              <TextInput
                className="text_input"
                type={"password"}
                name={"password"}
                placeholder={"Password..."}
              />
              <TextInput
                className="text_input"
                type={"password"}
                name={"confirm_password"}
                placeholder={"Confirm Your Password..."}
              />
              <ul>
                <ListItem>
                  <button
                    className="register_button"
                    type={"submit"}
                    tabIndex="0"
                  >
                    Register
                  </button>
                </ListItem>
                <ListItem>
                  <Link
                    className="login_button"
                    type={"button"}
                    tabIndex="0"
                    to="login"
                  >
                    Have an account?
                  </Link>
                </ListItem>
              </ul>
            </FormArea>
          );
        }}
      </Formik>
    </FormContainer>
  );
};
export const LoginForm = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string().email().required("Please Enter a Valid Email"),
    password: Yup.string().required().min(8).max(12),
  });

  return (
    <FormContainer>
      <FormHeader>login now</FormHeader>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log("pressed");
        }}
      >
        {({ handleSubmit }) => {
          return (
            <FormArea onSubmit={handleSubmit}>
              <TextInput
                className="text_input"
                name={"email"}
                placeholder={"Email..."}
              />

              <TextInput
                className="text_input"
                type={"password"}
                name={"password"}
                placeholder={"Password..."}
              />
              <ul>
                <ListItem>
                  <button className="login_button" type={"submit"} tabIndex="0">
                    Login
                  </button>
                </ListItem>
                <ListItem>
                  <Link
                    className="register_button"
                    type={"button"}
                    tabIndex="0"
                    to="register"
                  >
                    Need an account?
                  </Link>
                </ListItem>
              </ul>
            </FormArea>
          );
        }}
      </Formik>
    </FormContainer>
  );
};
export const NewPost = () => {
  const formSchema = Yup.object().shape({
    title: Yup.string().required("Please Enter a title for your post!"),
    content: Yup.string().required(),
  });

  return (
    <FormContainer>
      <FormHeader>create a new post</FormHeader>

      <Formik
        initialValues={{ title: "", author: "", content: "" }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log("pressed");
        }}
      >
        {({ handleSubmit }) => {
          return (
            <FormArea onSubmit={handleSubmit}>
              <TextInput
                className="text_input"
                name={"title"}
                placeholder={"Enter a title for your post!"}
              />
              <TextArea
                className="textarea_input"
                name={"content"}
                placeholder={"Content..."}
              />

              <button className="login_button" type={"submit"} tabIndex="0">
                Create Post
              </button>
            </FormArea>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

// Component Styles
const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormHeader = styled.h1`
  text-transform: capitalize;
  margin-bottom: 0.5rem;
  text-align: center;
`;
const FormContainer = styled.div`
  margin-top: 20vh;
  color: ${theme_color.primary_color};
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  opacity: 1;
  backdrop-filter: blur(0.3rem);
  background: ${theme_color.modal_background};
  box-shadow: 0.3rem 0.3rem 0.4rem $black;
  border-radius: 2%;
  padding: 2rem 2.5rem 2rem 2.5rem;
`;
const ListItem = styled.li`
  display: inline-block;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  list-style-type: none;
`;
