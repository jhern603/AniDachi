import axios from 'axios';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import { focus_color } from 'styles/variables';
import { NavLink } from 'react-router-dom';
//Learning Note: Apparently using a promise (in this case an axios.get) breaks the set method for useState
export let posts = null;
let completed = false;
let awaiting = null;
let API = 'http://localhost:5000/api/posts';
export let post = null;
//API Call functions
const FetchPosts = () => {
  if (awaiting === null) {
    let getRequest = axios
      .get(API)
      .then((res) => {
        posts = res;
        completed = true;
      })
      .catch((e) => {
        console.log(e);
      });
    awaiting = getRequest;
    throw getRequest;
  } else if (!completed) {
    throw awaiting;
  } else {
    if (posts.data !== null && posts.data.length > 0) {
      return (
        <Post>
          {posts.data.map((item) => {
            return (
              <Post key={item.id}>
                <PostHeader>{item.title}</PostHeader>
                <PostAuthor>{item.author}</PostAuthor>
                <p>{item.content}</p>
                <button
                  className="delete_button"
                  type="submit"
                  onClick={(e) => deletePost(e, item)}
                >
                  Delete
                </button>
                <NavLink
                  className="edit_button"
                  to={`edit/${item.id}`}
                  onClick={(e) => {
                    post = item;
                  }}
                >
                  Edit
                </NavLink>
              </Post>
            );
          })}
        </Post>
      );
    } else {
      return (
        <Post>
          <PostHeader>There are no posts!</PostHeader>
        </Post>
      );
    }
  }
};

const deletePost = (e, post) => {
  e.preventDefault();
  let r = window.confirm('Are you sure you would like to delete this post?');

  if (r === true) {
    axios
      .delete(`http://localhost:5000/api/posts/${post.id}`)
      .then(alert('This post has been deleted.'))
      .catch((e) => console.error(e));
  }
  window.location.reload();
};

export const sendPost = (post) => {
  axios
    .post(API, post)
    .then(alert('Your post has been submitted!'))
    .catch((e) => console.error(e));
  window.location.reload();
};

export const editPost = (id, post) => {
  axios
    .put(`http://localhost:5000/api/posts/${id}`, post)
    .then(alert('The post has been updated!'))
    .catch((e) => console.error(e));
};

//BUG: the edit bug has returned ._.


//Additional Components
const Loader = () => {
  return (
    <>
      <Loading />
    </>
  );
};
//This function actually displays the posts resolved from FetchPosts()
export const DisplayPosts = () => {
  return (
    <Suspense fallback={<Loader />}>
      <FetchPosts />
    </Suspense>
  );
};

//Styled Components
const Post = styled.div`
  margin-bottom: 3rem;
`;

const PostHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.4rem;
`;

const PostAuthor = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Loading = styled.div`
  color: ${focus_color};
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  @-webkit-keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @-webkit-keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
