import React from 'react';
import { TextInput, TextArea } from 'components/Textinput';
import { FormArea, FormHeader, FormContainer } from 'components/Forms';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { post } from 'api/PostAPI';
import { Redirect } from 'react-router-dom';
import { editPost } from 'api/PostAPI'

//BUG: Delete post stopped working


export const EditPost = () => {
  if (post === null) {
    return <Redirect to="/posts/view" />
  }

  const formSchema = Yup.object().shape({
    title: Yup.string().required(),
    author: Yup.string().required(),
    content: Yup.string().required(),
  });

  return (
    <FormContainer>
      <FormHeader>Edit post</FormHeader>
      <Formik
        initialValues={{
          title: post.title,
          author: post.author,
          content: post.content,
        }}
        onSubmit={(values) => {
          editPost(post.id, JSON.stringify(values));
          window.location.reload();
        }}
        validationSchema={formSchema}
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
                Edit Post
              </button>
            </FormArea>
          );
        }}
      </Formik>
    </FormContainer>
  );
};
