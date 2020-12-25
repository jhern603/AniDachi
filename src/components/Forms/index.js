//Imports
import styled from 'styled-components';
import * as theme_color from 'styles/variables';

//Barrel Exporting
export { RegisterForm } from '../Forms/RegisterForm';
export { LoginForm } from '../Forms/LoginForm';
export { ContactForm } from '../Forms/ContactForm';
export { NewPost } from '../Forms/NewPost';

//Form Styles
export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormHeader = styled.h1`
  text-transform: capitalize;
  margin-bottom: 0.5rem;
  text-align: center;
`;
export const FormContainer = styled.div`
  margin-top: 20vh;
  color: ${theme_color.primary_color};
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  opacity: 1;
  backdrop-filter: blur(0.3rem);
  background: ${theme_color.modal_background};
  box-shadow: 0.3rem 0.3rem 0.4rem $black;
  border-radius: 2%;
  padding: 2rem 2.5rem 2rem 2.5rem;
`;
export const ListItem = styled.li`
  display: inline-block;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  list-style-type: none;
`;
