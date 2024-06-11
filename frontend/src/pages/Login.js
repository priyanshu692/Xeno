import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = ({ onSuccess, onFailure }) => (
  <div className='container'>
    <div className='card'>
      <div className='card-header'>
        <h2>Login</h2>
      </div>
      <div className='card-body'>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={onSuccess}
            onError={onFailure}
            buttonText='Login with Google'
            className='button'
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  </div>
);

export default Login;
