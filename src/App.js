import "./styles/index.css";
import React, { useState } from "react";
import { RegisterForm, LoginForm } from "./components/Forms";
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
          isLoginActive={activeLogin}
          setLoginActive={loginCloseButtonHandler}
        />
      ) : (
        ""
      )}
      {activeRegister ? (
        <RegisterForm
          isRegisterActive={activeRegister}
          setRegisterActive={registerCloseButtonHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default App;
