import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      onLogin(data.token);
      alert("Login successful");
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h1>Logga in</h1>
      <div className="container center">
        <input
          className="custom-input"
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="custom-input"
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="custom-input" onClick={handleLogin}>
          Logga in
        </button>
        <p2 className="noAccount">
          Har du inget konto?{" "}
          <Link to="/register" className="regLink">
            Tryck här för att registrera dig
          </Link>
        </p2>
      </div>
    </div>
  );
};

export default Login;
