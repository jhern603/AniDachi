import "./styles/index.css";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
//@TODO: Register button not summoning register modal
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
        
        registerActive={activeLogin}
        setRegisterActive={setActiveLogin}
      />
      <LoginForm isActive={activeLogin} setIsActive={loginCloseButtonHandler} />
      <RegisterForm
        isActive={activeRegister}
        setIsActive={registerCloseButtonHandler}
      />
    </div>
  );
}
export default App;
