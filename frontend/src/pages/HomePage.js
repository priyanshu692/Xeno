import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import DataIngestionForm from "./DataIngestionForm";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      console.log("Res: ", response);
      alert(response.data.message);
    } catch (error) {
      alert("Error sending data");
    }
  };

  return (
    <div>
      <DataIngestionForm />
    </div>

    // <div className='container'>
    //   <h1 className='text-center'>Home Page</h1>
    //   <p>Welcome to the Mini-CRM application!</p>
    //   <DataIngestionForm />
    //   {/* <div className='login-form'>
    //     <h2>Login</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className='form-group'>
    //         <label htmlFor='username'>Username</label>
    //         <input
    //           type='text'
    //           id='username'
    //           name='username'
    //           value={username}
    //           onChange={e => setUsername(e.target.value)}
    //         />
    //       </div>
    //       <div className='form-group'>
    //         <label htmlFor='password'>Password</label>
    //         <input
    //           type='password'
    //           id='password'
    //           name='password'
    //           value={password}
    //           onChange={e => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <button type='submit'>Login</button>
    //     </form>
    //   </div> */}
    // </div>
  );
};

export default HomePage;
