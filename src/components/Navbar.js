import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="navbar_title">
        Jose Hernandez
      </Link>

      <ul className="navbar_links">
        <li className="navbar_item">
          <Link to="/about" className="navbar_text">
            About
          </Link>
        </li>

        <li className="navbar_item">
          <Link to="/contact" className="navbar_text">
            Contact
          </Link>
        </li>

        <li className="navbar_item">
          <Link to="/login" className="login">
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;

