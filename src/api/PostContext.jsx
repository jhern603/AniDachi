import React, { useState, createContext } from 'react';

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [post, setPost] = useState(null);
  return (
    <PostContext.Provider value={[post, setPost]}>
      {props.children}
    </PostContext.Provider>
  );
};
