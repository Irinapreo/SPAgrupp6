import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import Privacy from "../components/Privacy";
import Login from "../components/Login";
import Register from "../components/Register";
import Logout from '../components/Logout';
import Navbar from '../components/Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); 
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);  // Update state immediately
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);  // Clear authentication state
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Privacy />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};


export default App;
