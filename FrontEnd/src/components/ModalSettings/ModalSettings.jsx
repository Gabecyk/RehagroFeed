import React from 'react';
import './ModalSettings.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ModalSettings = () => {

  const navigate = useNavigate();

  function handleClickProfile(){
    navigate('/profile')
  }

  function handleLogout(){
    handleSubmit();
  }


  const handleSubmit = async () => {

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/rf/feed/logout');

      const msg = response.data.message;

      localStorage.removeItem('token');
      

      alert(msg);
      navigate('/');
    } catch (err) {
      alert('Logout falhou');
      console.log(err);
    }
  }

  return (
    <div className="modal-settings">
      <div className="modal-option" onClick={handleClickProfile}>
        <span className="modal-title" >Perfil</span>
      </div>

      <div className="modal-divider" />

      <div className="modal-option" onClick={handleLogout}>
        <span className="logout-text">Logout</span>
      </div>
    </div>
  );
};

export default ModalSettings;
