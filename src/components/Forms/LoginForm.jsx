import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextInput } from 'components/Textinput';
import { Link } from 'react-router-dom';
import { FormArea, FormHeader, FormContainer, ListItem } from '../Forms';

export const LoginForm = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string().email().required('Please Enter a Valid Email'),
    password: Yup.string().required().min(8).max(12),
  });

  return (
    <FormContainer>
      <FormHeader>login now</FormHeader>

      <Formik
        initialValues={{ email: '', password: '' }}
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
                type={'password'}
                name={'password'}
                placeholder={'Password...'}
              />
              <ul>
                <ListItem>
                  <button className="login_button" type={'submit'} tabIndex="0">
                    Login
                  </button>
                </ListItem>
                <ListItem>
                  <Link
                    className="register_button"
                    type={'button'}
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
