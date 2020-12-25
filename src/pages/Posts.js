import React from "react";
import Sidebar from "components/Sidebar";
import { useRouteMatch, Route } from "react-router-dom";
import { NewPost } from "components/Forms";

const Posts = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <Sidebar url={url} />
      <Route path={`${path}/new`}>
        <div className="form_page_container">
          <NewPost />
        </div>
      </Route>
      <Route path={`${path}/:posts`}></Route>
    </div>
  );
};

export default Posts;
