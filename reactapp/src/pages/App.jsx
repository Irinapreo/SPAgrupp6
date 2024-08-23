import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Privacy from "../components/Privacy";
import Login from "../components/Login";
import Register from "../components/Register";
import Borat from "../components/Borat";

const App = () => {
  const isAuthenticated = () => localStorage.getItem("token") !== null;
  const isUserRegistered = () =>
    localStorage.getItem("userRegistered") === "true";

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Privacy />} />
          <Route path="/borat" element={<Borat />} />

          {/* Ny route för /kontakt/borat */}
          <Route path="/kontakt/borat" element={<Borat />} />

          {/* Registration Route */}
          <Route
            path="/register"
            element={
              isUserRegistered() ? (
                <Navigate to="/login" replace />
              ) : (
                <Register />
              )
            }
          />

          {/* Login Route */}
          <Route
            path="/login"
            element={
              isAuthenticated() ? <Navigate to="/" replace /> : <Login />
            }
          />

          {/* Redirect any unknown route to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;