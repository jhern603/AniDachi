import "./styles/index.css";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";


function App() {
  //Props
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeRegister, setActiveRegister] = useState(false);

  //Event handlers
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
