import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as theme_color from 'styles/variables';
import { useAuth0 } from '@auth0/auth0-react';

//Exported Component
export const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Nav>
      <NavLink exact to="/" className="navbar_title" tabIndex="0">
        Jose Hernandez
      </NavLink>

      <ul className="navbar_links">
        <li style={{ display: 'inline' }}>
          <NavLink
            to="/about"
            activeClassName="navbar_active"
            className="navbar_text"
            tabIndex="0"
          >
            About
          </NavLink>
        </li>
        <li style={{ display: 'inline' }}>
          <NavLink
            to="/posts"
            activeClassName="navbar_active"
            className="navbar_text"
            tabIndex="0"
          >
            Posts
          </NavLink>
        </li>
        <li style={{ display: 'inline' }}>
          <NavLink
            to="/contact"
            activeClassName="navbar_active"
            className="navbar_text"
            tabIndex="0"
          >
            Contact
          </NavLink>
        </li>

        <li style={{ display: 'inline' }}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </li>
      </ul>
    </Nav>
  );
};

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="login_button"
      onClick={(e) => {
        e.preventDefault();
        loginWithRedirect();
      }}
    >
      Login
    </button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="login_button"
      onClick={(e) => {
        e.preventDefault();
        logout();
      }}
    >
      Log Out
    </button>
  );
};

//Component Styles
const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme_color.primary_color};
  padding: 1rem 1.5rem 1.5rem 1rem;
`;
