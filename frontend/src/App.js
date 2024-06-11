import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
import DataIngestionForm from "./pages/DataIngestionForm";
import AudienceForm from "./pages/AudienceForm";
import CampaignList from "./pages/CampaignList";
// import GoogleLoginButton from "./components/GoogleLoginButton"; // Assuming you have a GoogleLoginButton component
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = response => {
    // Process Google login response and set authentication state
    setIsAuthenticated(true);
  };

  const handleLoginFailure = response => {
    console.error("Google login failed:", response);
  };

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to Mini-CRM</h1>
          <div className='nav-buttons'>
            <Link to='/audience-form'>
              <button>Create Audience</button>
            </Link>
            <Link to='/campaigns'>
              <button>View Campaigns</button>
            </Link>
          </div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/login' element={<LoginPage />} /> */}
            <Route path='/data-ingestion' element={<DataIngestionForm />} />
            <Route path='/audience-form' element={<AudienceForm />} />
            <Route path='/campaigns' element={<CampaignList />} />
          </Routes>
        </header>
        {/* {!isAuthenticated && (
          <div className='login-container'>
            <GoogleLoginButton
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
            />
          </div>
        )} */}
      </div>
    </Router>
  );
};

export default App;
