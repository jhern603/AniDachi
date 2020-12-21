import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput, { TextArea } from "./TextInput.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ContactForm = () => {
  const formSchema = Yup.object().shape({
    title: Yup.string().required(),
    content: Yup.string().required(),
    email: Yup.string().email().required("Please Enter a Valid Email"),
  });
  return (
    <div className="contact_container">
      <h1 className={"contact_header"}>Contact Us!</h1>

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
            <form onSubmit={handleSubmit} className="contact_form">
              <TextInput
                className="contact_input"
                name={"title"}
                placeholder={"Title..."}
              />
              <TextInput
                className="contact_input"
                name={"email"}
                placeholder={"Email..."}
              />

              <TextArea
                className="contact_message_input"
                name={"content"}
                placeholder={"Content..."}
              />
              <button className="contact_button" type={"submit"}>
                Send Message
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

const RegisterForm = () => {
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
    <div className="form_container">
      <h1 className={"form_header"}>register now</h1>

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
            <form onSubmit={handleSubmit} className="user_form">
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
              <ul className="buttons_container">
                <li className="form_button">
                  <button
                    className="register_button"
                    type={"submit"}
                    tabIndex="0"
                  >
                    Register
                  </button>
                </li>
                <li className="form_button">
                  <Link
                    className="login_button"
                    type={"button"}
                    tabIndex="0"
                    to="login"
                  >
                    Have an account?
                  </Link>
                </li>
              </ul>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

const LoginForm = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string().email().required("Please Enter a Valid Email"),
    password: Yup.string().required().min(8).max(12),
  });

  return (
    <div className="form_container">
      <h1 className={"form_header"} tabIndex="0" aria-label="Login Title">
        login now
      </h1>

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
            <form onSubmit={handleSubmit} className="user_form">
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
              <ul className="buttons_container">
                <li className="form_button">
                  <button className="login_button" type={"submit"} tabIndex="0">
                    Login
                  </button>
                </li>
                <li className="form_button">
                  <Link
                    className="register_button"
                    type={"button"}
                    tabIndex="0"
                    to="register"
                  >
                    Need an account?
                  </Link>
                </li>
              </ul>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export { ContactForm, LoginForm, RegisterForm };
