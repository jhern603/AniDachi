import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";

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

function RegisterForm({ isActive, setIsActive }) {
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
          onSubmit={(data) => console.log(data)}
        >
          {({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit} className="login_form">
                <p className="close_button" onClick={setIsActive}>
                  X
                </p>

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
                <button className="register_button" type={"submit"}>
                  Register
                </button>
              </form>
            );
          }}
        </Formik>
    </div>
  );
}

export default RegisterForm;
