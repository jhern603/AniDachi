import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ url }) => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_item">
          <NavLink to={`${url}/new`} activeClassName="sidebar_active">
            Make New Post
          </NavLink>
        </div>
        <div className="sidebar_item">
          <NavLink to={`${url}/view`} activeClassName="sidebar_active">
            View Posts
          </NavLink>
        </div>
        <div className="sidebar_item">Some Other Stuff</div>
      </div>
    </div>
  );
}
