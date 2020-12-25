import { FormArea, FormContainer } from 'components/Forms';
import React from 'react';
import styled from 'styled-components';
export const ViewPosts = () => {
  return (
    <div className="page_container">
      <div>
        <PostContainer>
          <FormArea>
            <Posts></Posts>
              <Post>
                <PostHeader>Post Title</PostHeader>
                <PostAuthor>Posted by: Author</PostAuthor>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Post>
            </Posts>
          </FormArea>
        </PostContainer>
      </div>
    </div>
  );
};

const PostContainer = styled(FormContainer)`
  margin: 0 4rem 0 10rem;
  border-radius: 0.5rem;
`;
const Posts = styled.ul`
  max-height: 75vh;
  list-style: none;
  overflow-y: scroll;
`;
const Post = styled.li`
    margin-bottom: 3rem;
`;
const PostHeader = styled.h1`
font-size: 2rem;
margin-bottom: 0.4rem;
`

const PostAuthor = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;