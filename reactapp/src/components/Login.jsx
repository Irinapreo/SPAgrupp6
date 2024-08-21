import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      alert('Login successful');
      navigate('/');

    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className='container center'>
      <input className="custom-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="custom-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="custom-input" onClick={handleLogin}>Login</button>
      </div>
      
    </div>
  );
};

export default Login;
