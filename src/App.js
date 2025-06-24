import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import BrowserRouter, Route, and Routes
import LandingPage from './Landingpage';
import LoginPage from './LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes for Landing Page and Login Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
