import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";

const formSchema = Yup.object().shape({
  email: Yup.string().email().required("Please Enter a Valid Email"),
  password: Yup.string().required().min(8).max(12),
});

function LoginForm({ isActive, setIsActive }) {
  return (
    <div className="form_container">
        <h1 className={"form_header"}>login now</h1>
        <p className="close_button" onClick={setIsActive}>
          X
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={formSchema}
          onSubmit={(data) => console.log(data)}
        >
          {({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit} className="login_form">
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
                <button className="login_button" type={"submit"}>
                  Login
                </button>
              </form>
            );
          }}
        </Formik>
    </div>
  );
}

export default LoginForm;
