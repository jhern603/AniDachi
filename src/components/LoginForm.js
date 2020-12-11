import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";

const formSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8).max(12),
});

function LoginForm({ isActive, setIsActive }) {

  return (
    <div className={`${isActive ? "login_container" : "inactive_container"}`}>
      <h1>welcome to my sweet login form!</h1>
      <p className="close_button" onClick = {setIsActive}>X</p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={formSchema}
        onSubmit={(data) => console.log(data)}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className="login_form">
              <TextInput
                className="email"
                name={"email"}
                placeholder={"Email..."}
              />

              <TextInput
                className="password"
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
