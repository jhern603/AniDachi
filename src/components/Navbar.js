import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/About.js";
import Index from "../pages/Index.js";
import Contact from "./Forms.js";

const Navbar = ({
  loginActive,
  setLoginActive,
  registerActive,
  setRegisterActive,
}) => {
  return (
    <header className="navbar">
      <Router>
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
            <button
              className="login"
              onClick={() => {
                setLoginActive(!loginActive);
                if (registerActive) setRegisterActive(!registerActive);
              }}
            >
              Login
            </button>
          </li>
          <li className="navbar_item">
            <button
              className="register"
              onClick={() => {
                setRegisterActive(!registerActive);
                if (loginActive) setLoginActive(!loginActive);
              }}
            >
              Register
            </button>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </header>
  );
};
export default Navbar;

