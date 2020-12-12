import React from "react";

const Navbar = ({ loginActive, setLoginActive, registerActive, setRegisterActive }) => {
  return (
    <div className="navbar">
      <p className="header_title">Jose Hernandez</p>

      <ul className="navbar_links">
        <li className="navbar_item">

          <button
            className="login"
            onClick={() => setLoginActive(!loginActive)}
          >
            Login
          </button>
        </li>

        <li className="navbar_item">
          <button
            className="register"
            onClick={() => setRegisterActive(!registerActive)}
          >
            Register
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
