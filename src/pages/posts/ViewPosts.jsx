import { FormArea, FormContainer } from 'components/Forms';
import React from 'react';
import styled from 'styled-components';
import { DisplayPosts } from 'api/PostAPI';


export const ViewPosts = ({ post, setPost }) => {

  return (
    <div className="page_container">
      <div>
        <PostContainer>
          <FormArea>
            <Posts id="posts_area">
              <DisplayPosts />
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
  min-width: 68vw;
`;
