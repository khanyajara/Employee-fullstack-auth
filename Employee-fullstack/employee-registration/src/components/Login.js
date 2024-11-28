import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://backend-employee-fwnr.onrender.com/api/Login', {
        email,
        password,
      });
      console.log(response.data);
      alert('Login successful');
      
      window.location.href = '/home'; 
    } catch (error) {
      console.error(error);
      alert(error.response ? error.response.data.message : 'Something went wrong, please try again');
    }
  };

  const forgot =()=>{
    navigate('/forgot-password')
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="space" onSubmit={handleLogin}>
        <input
          className="form"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/>
        <input
          className="form"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div  onClick={forgot}>
            <Link>ForgotPassword</Link>
        </div>
        <button className="btn2" type="submit">
          Login
        </button>
      </form>
      <div className="link-container">
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
