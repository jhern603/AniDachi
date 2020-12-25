import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextInput } from 'components/Textinput';
import { Link } from 'react-router-dom';
import { FormArea, FormHeader, FormContainer, ListItem } from '../Forms';
export const RegisterForm = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string().email().required('Please Enter a Valid Email'),
    first_name: Yup.string().required('Enter your first name'),
    last_name: Yup.string().required('Enter your last name'),
    password: Yup.string().required().min(8).max(12),
    confirm_password: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });
  return (
    <FormContainer>
      <FormHeader>register now</FormHeader>
      <Formik
        initialValues={{
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          confirm_password: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log('pressed');
        }}
      >
        {({ handleSubmit }) => {
          return (
            <FormArea onSubmit={handleSubmit}>
              <TextInput
                className="text_input"
                name={'email'}
                placeholder={'Email...'}
              />
              <TextInput
                className="text_input"
                name={'first_name'}
                placeholder={'First Name...'}
              />
              <TextInput
                className="text_input"
                name={'last_name'}
                placeholder={'Last Name...'}
              />
              <TextInput
                className="text_input"
                type={'password'}
                name={'password'}
                placeholder={'Password...'}
              />
              <TextInput
                className="text_input"
                type={'password'}
                name={'confirm_password'}
                placeholder={'Confirm Your Password...'}
              />
              <ul>
                <ListItem>
                  <button
                    className="register_button"
                    type={'submit'}
                    tabIndex="0"
                  >
                    Register
                  </button>
                </ListItem>
                <ListItem>
                  <Link
                    className="login_button"
                    type={'button'}
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
