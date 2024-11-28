import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from '../styles/Register.css'

const Register = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://backend-employee-fwnr.onrender.com/api/SignUp', {
        email,
        firstName,
        lastName,
        password,
      });

      console.log(response.data);
      alert('User created successfully');
      window.location.href = '/home'; 

    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className='space' onSubmit={handleRegister}>
        <input
          className='form'
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className='form'
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className='form'
          type="text"
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          className='form'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='btn2' type="submit">Register</button>
      </form>
      {error && <div className="error-message">{error}</div>} 
      <div className="link-container">
        <p>Already registered? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
