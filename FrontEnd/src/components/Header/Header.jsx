import './Header.css';
import RehagroNameLogo from '../../assets/RehagroNameLogo.svg';
import { List } from 'phosphor-react';
import React, { useState } from 'react';
import ModalSettingsWrapper from '../ModalSettings/ModalSettingsWrapper';

export function Header() {
  const [showSettings, setShowSettings] = useState(false);

  const handleLogout = () => {
    console.log('Usuário deslogado!');
    setShowSettings(false);
  };

  return (
    <header className="headerContainer">
      <img src={RehagroNameLogo} alt="Logotipo do Rehagro" />

      <div className="headerIcons" >
        <button
          onClick={() => setShowSettings((prev) => !prev)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <List size={32} color="#E1E1E6" />
        </button>

        <ModalSettingsWrapper
          show={showSettings}
          onClose={() => setShowSettings(false)}
          onLogout={handleLogout}
        />
      </div>
    </header>
  );
}
