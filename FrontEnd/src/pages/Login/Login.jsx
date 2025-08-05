import React from 'react'
import { useState } from 'react'
import './Login.css'
import imgLogin from '../../assets/imageLogin.jpg'
import LogoRehagro from '../../assets/LogoRehagro.png'

function Login() {
  const [email, setEmil] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if(password.length < 1)
      alert('Digite a senha')
    if(email.length < 1)
      alert('Digite o email')
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
          <form action={handleSubmit}>
            <p>Email</p>
            <input onChange={(e) => setEmil(e.target.value)} value={email} type="email" name="" id="" />
            <p>Senha</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" />
            <br />
            <button type='submit'>Login</button>
          </form>
          <p className='newRegister'>Não tem uma conta? <span>Registre-se</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login