import React, { useState } from 'react';
import './ModalSettings.css';

const ModalSettings = ({ onLogout }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="modal-settings"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="modal-background" />
      <span className="modal-title">Perfil</span>
      <div className="modal-divider" />
      {isHovered && <div className="logout-hover-box" />}
      <span className="logout-text" onClick={onLogout}>Logout</span>
    </div>
  );
};

export default ModalSettings;
