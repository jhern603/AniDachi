import React, { useState } from 'react';
import { Sidebar } from 'components/Sidebar';
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import { NewPost } from 'components/Forms';
import { ViewPosts } from './ViewPosts';
import { EditPost } from './EditPost';
import { useAuth0 } from '@auth0/auth0-react';

export const Posts = () => {
  const { url, path } = useRouteMatch();
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
      return (
        <>
          
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
              <div className="form_page_container">
                <EditPost />
              </div>
            </Route>
          </Switch>
        </>
      );
  } else {
    return ( 
      <>
      <h1>You need to be logged in to view this page.</h1>
      </>
    )
  }

};
