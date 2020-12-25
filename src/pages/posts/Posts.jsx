import React from 'react';
import { Sidebar } from 'components/Sidebar';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { NewPost } from 'components/Forms';
import { ViewPosts } from './ViewPosts';


export const Posts = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <Sidebar url={url} />
      <Switch>
        <Route path={`${path}/new`}>
          <div className="form_page_container">
            <NewPost />
          </div>
        </Route>
        <Route path={`${path}/:posts`}>
          <ViewPosts />
        </Route>
      </Switch>
    </div>
  );
};
