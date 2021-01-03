import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextInput, TextArea } from 'components/Textinput';
import { FormArea, FormHeader, FormContainer } from '../Forms';
import { sendPost } from 'api/PostAPI';

export const NewPost = () => {
  const formSchema = Yup.object().shape({
    title: Yup.string().required('Please Enter a title for your post!'),
    content: Yup.string().required(),
  });

  return (
    <FormContainer>
      <FormHeader>create a new post</FormHeader>
      <Formik
        initialValues={{ title: '', author: '', content: '' }}
        validationSchema={formSchema}
        onSubmit={(values, { resetForm }) => {
          sendPost(JSON.stringify(values));
          resetForm({});
        }}
      >
        {({ handleSubmit }) => {
          return (
            <FormArea onSubmit={handleSubmit}>
              <TextInput
                className="text_input"
                name={'title'}
                placeholder={'Enter a title for your post!'}
              />
              <TextInput
                className="text_input"
                name={'author'}
                placeholder={'Enter your pen name'}
              />
              <TextArea
                className="textarea_input"
                name={'content'}
                placeholder={'Content...'}
              />

              <button className="login_button" type={'submit'} tabIndex="0">
                Create Post
              </button>
            </FormArea>
          );
        }}
      </Formik>
    </FormContainer>
  );
};
