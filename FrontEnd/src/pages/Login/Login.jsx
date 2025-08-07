import React from 'react'
import { useState } from 'react'
import './Login.css'
import imgLogin from '../../assets/imageLogin.jpg'
import LogoRehagro from '../../assets/LogoRehagro.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmil] = useState('');
  const [password, setPassword] = useState('');
   //const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // evita recarregar a página
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/rf/login', {
        email,
        password
      });

      const token = response.data.token;

      // Armazenar token no localStorage
      localStorage.setItem('token', token);

      // Redirecionar para rota protegida
      alert('Logado com sucesso')
      //navigate('/register');
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
            <input onChange={(e) => setEmil(e.target.value)} value={email} type="email" name="" id="" minlength="3" maxlength="30" required />
            <p>Senha</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" minlength="3" maxlength="30" required />
            <br />
            <button type='submit'>Login</button>
          </form>
          <p className='newRegister'>Não tem uma conta? <Link to={'/register'}><span>Registre-se</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login