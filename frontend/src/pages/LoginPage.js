import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "./App.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = response => {
    console.log(response);
    navigate("/");
  };

  const handleLoginFailure = response => {
    console.error(response);
  };

  return (
    <div className='container'>
      <Login onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />
    </div>
  );
};

export default LoginPage;
