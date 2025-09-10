import React, { useState } from 'react'
import { register } from '../../authApi';
import loginBg from '../../../../assets/login_bg.jpg';
import './register.css'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await register({ UserName, Email, Password, Gender });
      console.log("Register Successfully: ", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Registration Failed: ", err);
    }
  };

  return (
    <div className='login_container'>
      <div className="login_image" style={{ backgroundImage: `url(${loginBg})` }}></div>
      <form className='login_form' onSubmit={handleRegister}>
        <input
          type="text"
          value={UserName}
          placeholder='Username'
          onChange={(e) => setUserName(e.target.value)} />

        <div className="gender">
          <p className="select_gender">Select Gender</p>
          <div className="gender_input">
            <input
              type="radio"
              value="male"
              checked={Gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>
              Male
            </label>
            <input
              type="radio"
              value="female"
              checked={Gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>
              Female
            </label>
            <input
              type="radio"
              value="other"
              checked={Gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>
              Other
            </label>
          </div>
        </div>

        <input
          type="email"
          value={Email}
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)} />

        <input
          type="password"
          value={Password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
        <a href="/login">I already have an account</a>

      </form>
    </div>
  )
}

export default Register