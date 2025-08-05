import React from 'react';
import './ModalSettings.css';

const ModalSettings = ({ onLogout }) => {
  return (
    <div className="modal-settings">
      <div className="modal-option">
        <span className="modal-title">Perfil</span>
      </div>

      <div className="modal-divider" />

      <div className="modal-option" onClick={onLogout}>
        <span className="logout-text">Logout</span>
      </div>
    </div>
  );
};

export default ModalSettings;
