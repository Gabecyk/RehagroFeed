import './App.css'
import ModalSettings from './components/ModalSettings/ModalSettings';
import React, { useState } from 'react';
import ModalSettingsWrapper from './components//ModalSettings/ModalSettingsWrapper';
function App() {
const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    alert('Usuário deslogado!');
    setShowModal(false); // esconde o modal após logout
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const SomeParentComponent = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleLogout = () => {
    console.log('Usuário deslogado!');
    setShowSettings(false);
  };

   return (
   <div style={{ position: 'relative' }}>
      <button onClick={() => setShowSettings(prev => !prev)}>
        Abrir Modal Settings
      </button>

      <ModalSettingsWrapper
        show={showSettings}
        onClose={() => setShowSettings(false)}
        onLogout={handleLogout}
      />
    </div>
     );
};
    

}

export default App
