import React from "react";

const Navbar = ({
  loginActive,
  setLoginActive,
  registerActive,
  setRegisterActive,
}) => {
  return (
    <header className="navbar">
      <p className="navbar_title">Jose Hernandez</p>

      <ul className="navbar_links">
        <li className="navbar_item">
          <p className="navbar_text">Link 1</p>
        </li>
        <li className="navbar_item">
          <p className="navbar_text">Link 2</p>
        </li>
        <li className="navbar_item">
          <p className="navbar_text">Link 3</p>
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
    </header>
  );
};
export default Navbar;
