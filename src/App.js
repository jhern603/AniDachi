import "./styles/index.css";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
//Flexbox: adjust "gimme" button to be in the center of the page when form is inactive
function App() {

  //State for login modal
  const [activeLogin, setActiveLogin] = useState(false);

  const closeButtonHandler = () => {
    setActiveLogin(!activeLogin);
  }
  return (
    <div className="App">
      <button className={`${!activeLogin ? 'login' : 'login_inactive'}`} onClick={() => setActiveLogin(!activeLogin)}>
        Give me Login Form
      </button>

      <LoginForm isActive={activeLogin} setIsActive={closeButtonHandler} />
    </div>
  );
}

export default App;
