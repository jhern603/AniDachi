import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="navbar_title" tabIndex="0">
        Jose Hernandez
      </Link>

      <ul className="navbar_links">
        <li className="navbar_item">
          <Link to="/about" className="navbar_text" tabIndex="0">
            About
          </Link>
        </li>

        <li className="navbar_item">
          <Link to="/contact" className="navbar_text" tabIndex="0">
            Contact
          </Link>
        </li>

        <li className="navbar_item">
          <Link to="/login" className="login" tabIndex="0">
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;

