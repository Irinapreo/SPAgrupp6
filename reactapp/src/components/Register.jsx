import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) {
        localStorage.setItem('userRegistered', 'true');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  return (
<div>
      <h1>Register</h1>
      <form className="container center" onSubmit={handleRegister}>
       <div className="register-username">
        <label htmlFor="username">Username:</label>
         <input
           id="username" 
           name="username"
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           />
         </div>
         <div className="register-password">
         <label htmlFor="password">Password:</label>
         <input
           id="password" 
           name="password" 
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
         </div>
         <button className="custom-input" type="submit">
         Register
         </button>
       </form>
     </div>
   );
};

export default Register;

