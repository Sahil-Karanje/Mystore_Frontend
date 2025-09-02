import React, { useState } from 'react'
import { login } from '../../authApi';
import loginBg from '../../../../assets/login_bg.jpg'
import "./login.css"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      console.log("Logged in: ", response.data);
      // localStorage.setItem("token", response.data.token);
      navigate('/');
    } catch (err) {
      console.error("Login failed: ", err);
    }
  };

  return (
    <div className='login_container'>
      <div className="login_image" style={{ backgroundImage: `url(${loginBg})` }}></div>
      <form className='login_form' onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <a href="/register">Register me</a>

      </form>
    </div>
  )
}

export default Login