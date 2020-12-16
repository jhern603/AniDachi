import "./styles/index.css";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
//TODO: center containers on page

function App() {
  //State for login modal
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeRegister, setActiveRegister] = useState(false);

  //How to make universinal close button handler?
  const loginCloseButtonHandler = () => {
    setActiveLogin(!activeLogin);
  };
  const registerCloseButtonHandler = () => {
    setActiveRegister(!activeRegister);
  };

  return (
    <div className="App">
      
      <Navbar
        loginActive={activeLogin}
        setLoginActive={setActiveLogin}
        registerActive={activeRegister}
        setRegisterActive={setActiveRegister}
      />
      
      {activeLogin ? (
        <LoginForm
          isActive={activeLogin}
          setIsActive={loginCloseButtonHandler}
        />
      ) : (
        ""
      )}
      {activeRegister ? (
        <RegisterForm
          isActive={activeRegister}
          setIsActive={registerCloseButtonHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default App;
