import React, { useState } from 'react';
import './Login.css';
import imgLogin from '../../assets/imageLogin.jpg';
import LogoRehagro from '../../assets/LogoRehagro.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/rf/login', {
        email,
        password
      });

      const token = response.data.token;

      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      await login(token); 
      
      navigate('/feed'); // ou qualquer página protegida

    } catch (err) {
      alert('Login falhou');
      console.log(err);
    }
  }

  return (
    <div className='BoxOutsideLogin'>
      <div className='LeftLogin'>
        <div className='imgLogin'>
          <img src={imgLogin} alt="Image Login" />
        </div>
      </div>
      <div className='RightLogin'>
        <div className='logoPng'>
          <img src={LogoRehagro} alt="logo" />
        </div>
        <h1 className='h1LoginPage'>Login</h1>
        <div className='formLogin'>
          <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              minLength="3"
              maxLength="30"
              required
            />
            <p>Senha</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              minLength="3"
              maxLength="30"
              required
            />
            <br />
            <button type='submit'>Login</button>
          </form>
          <p className='newRegister'>Não tem uma conta? <Link to={'/register'}><span>Registre-se</span></Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
