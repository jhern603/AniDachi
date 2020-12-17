import React from "react";
import { LoginForm } from "../components/Forms";
import Navbar from "../components/Navbar";

const Login = () => {

  return (
    <div className="">
      <Navbar />
      <div className="page">
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
