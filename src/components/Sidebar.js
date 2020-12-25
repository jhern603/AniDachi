import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ url }) => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_item">
          <Link  to={`${url}/new`}>
            Make New Post
          </Link>
        </div>
        <div className="sidebar_item">
          <Link  to={`${url}/view`}>
            View Posts
          </Link>
        </div>
        <div className="sidebar_item">Some Other Stuff</div>
      </div>
    </div>
  );
}

export default Sidebar;
