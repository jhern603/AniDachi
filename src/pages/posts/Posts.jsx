import React from 'react';
import { Sidebar } from 'components/Sidebar';
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import { NewPost } from 'components/Forms';
import { ViewPosts } from './ViewPosts';
import { EditPost } from './EditPost';

export const Posts = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <Redirect to={`${path}/view`} />
      <Sidebar url={url} />
      <Switch>
        <Route path={`${path}/new`}>
          <div className="form_page_container">
            <NewPost />
          </div>
        </Route>
        <Route exact path={`${path}/view`}>
          <ViewPosts />
        </Route>
        <Route path={`${path}/edit/`}>
          <EditPost />
        </Route>
      </Switch>
    </div>
  );
};
