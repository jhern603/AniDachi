import axios from 'axios';
import { useState } from 'react';
import React, { Suspense } from 'react';

//TODO: implement styled components with DOM manipulation
//BUG: Posts doesn't load on DOM render change (but multi-loads on hot reloads?)
let post = null;
let completed = false;
let awaiting = null;
const FetchPosts = () => {
  let API = 'http://localhost:5000/api/posts';
	console.log('AWAITING' + awaiting);
  console.log('COMPLETED' + completed);
  console.log('Post' + post);

  if (awaiting == null) {
    let getRequest = axios.get(API).then((res) => {
      post = res;
      completed = true;
    }).catch((e) => {
      console.log(e)
    });

    awaiting = getRequest;

    console.log("getRequest: " + getRequest)
    throw getRequest;
  } else if (!completed) {
    throw awaiting;
  } else {
    console.log("Holy shit I work")
    return (
      <div >
        <h1>{post.title}</h1>
        <h2>{post.author}</h2>
        <p>{post.content}</p>
      </div>
    );
  }
};

export const DisplayPosts = () => {
  console.log("I'm trying to dislay shit here")
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FetchPosts />
    </Suspense>
  );
};
