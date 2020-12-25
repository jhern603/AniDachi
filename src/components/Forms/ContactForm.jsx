import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextInput, TextArea } from 'components/Textinput';
import { FormArea, FormHeader, FormContainer} from '../Forms';

export const ContactForm = () => {
  const formSchema = Yup.object().shape({
    title: Yup.string().required(),
    content: Yup.string().required(),
    email: Yup.string().email().required('Please Enter a Valid Email'),
  });
  return (
    <FormContainer>
      <FormHeader>Contact Us!</FormHeader>

      <Formik
        initialValues={{
          title: '',
          email: '',
          content: '',
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
              <TextInput name={'title'} placeholder={'Title...'} />
              <TextInput name={'email'} placeholder={'Email...'} />

              <TextArea
                className="textarea_input"
                name={'content'}
                placeholder={'Content...'}
              />
              <button className="login_button" type={'submit'}>
                Send Message
              </button>
            </FormArea>
          );
        }}
      </Formik>
    </FormContainer>
  );
};
