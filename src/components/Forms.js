import { Formik } from "formik";
import * as Yup from "yup";
import TextInput, { TextArea } from "./TextInput.js";


const formSchema = Yup.object().shape({
  title: Yup.string().email().required(),
  author: Yup.string().required(),
  content: Yup.string().required(),

  email: Yup.string().email().required("Please Enter a Valid Email"),
  first_name: Yup.string().required("Enter your first name"),
  last_name: Yup.string().required("Enter your last name"),
  password: Yup.string().required().min(8).max(12),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const ContactForm = () => {
  return (
    <div className="contact_container page">
      <h1 className={"contact_header"}>Contact Us!</h1>

      <Formik
        initialValues={{
          title: "",
          author: "",
          content: "",
        }}
        validationSchema={formSchema}
        onSubmit={(data) => console.log(data)}
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
                name={"author"}
                placeholder={"Author..."}
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
            <form onSubmit={handleSubmit} className="user_form">
              <p className="close_button">
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
};

const LoginForm = () => {
  return (
    <div className="form_container">
      <h1 className={"form_header"}>login now</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={formSchema}
        onSubmit={(data) => console.log(data)}
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
              <button className="login_button" type={"submit"}>
                Login
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

const blank = () => {
  return <div className="blank" >
  </div>;
};

export default blank;
export { ContactForm, LoginForm, RegisterForm };
