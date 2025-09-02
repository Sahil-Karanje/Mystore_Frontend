import React, { useState } from 'react'
import { register } from '../../authApi';
import loginBg from '../../../../assets/login_bg.jpg';
import './register.css'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await register({ name, surname, email, password, gender });
      console.log("Register Successfully: ", res.data);
      navigate("/");
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
          value={name}
          placeholder='name'
          onChange={(e) => setName(e.target.value)} />

        <input
          type="text"
          value={surname}
          placeholder='surname'
          onChange={(e) => setSurname(e.target.value)} />

        <div className="gender">
          <p className="select_gender">Select Gender</p>
          <div className="gender_input">
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>
              Male
            </label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>
              Female
            </label>
            <input
              type="radio"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>
              Other
            </label>
          </div>
        </div>

        <input
          type="email"
          value={email}
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)} />

        <input
          type="password"
          value={password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
        <a href="/login">I already have an account</a>

      </form>
    </div>
  )
}

export default Register