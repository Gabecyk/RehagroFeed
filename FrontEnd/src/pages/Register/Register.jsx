import React from 'react'
import { useState } from 'react'
import './Register.css'
import imgLogin from '../../assets/imageLogin.jpg'
import LogoRehagro from '../../assets/LogoRehagro.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmil] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [msg, setMsg] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault(); // evita recarregar a página
        const messages = [];

        if (password != confirmPassword) { messages.push('As senha não são parecidas!'); }
        else { messages.pop(); }

        setMsg(messages); // atualiza o estado

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/rf/register', {
                email,
                password,
                name
            });

            alert(response.data.message);

        } catch (err) {
            alert('Registro falhou', err);
        }
    };


    return (
        <div className='BoxOutsideRegister'>
            <div className='LeftRegister'>
                <div className='imgRegister'>
                    <img src={imgLogin} alt="Image Login" />
                </div>
            </div>
            <div className='RightRegister'>
                <div className='logoPng'>
                    <img src={LogoRehagro} alt="logo" />
                </div>
                <h1 className='h1RegisterPage'>Register</h1>
                {msg.length > 0 && (
                    <div className="error-messages">
                        {msg.map((m, index) => (
                            <p key={index} style={{ color: 'red' }}>{m}</p>
                        ))}
                    </div>
                )}
                <div className='formRegister'>
                    <form onSubmit={handleSubmit}>
                        <p>Nome</p>
                        <input onChange={(e) => setName(e.target.value)} value={name} name="" id="" minlength="3" maxlength="30" required />
                        <p>Email</p>
                        <input onChange={(e) => setEmil(e.target.value)} value={email} type="email" name="" id="" minlength="3" maxlength="30" required />
                        <p>Senha</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" minlength="3" maxlength="30" required />
                        <p>Confirme a Senha</p>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" name="" id="" minlength="3" maxlength="30" required />
                        <br />
                        <button type='submit'>Registrar</button>
                    </form>
                    <p className='oldLogin'>Você tem uma conta? <Link to={'/'}><span>Login</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register