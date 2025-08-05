import React, { useEffect, useRef } from 'react';
import ModalSettings from './ModalSettings';
import './ModalSettings.css';

const ModalSettingsWrapper = ({ show, onClose, onLogout }) => {
  const wrapperRef = useRef(null);

  // Fecha modal ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div ref={wrapperRef} style={{ position: 'absolute', top: 10, right: 20, zIndex: 100 }}>
      <ModalSettings onLogout={onLogout} />
    </div>
  );
};

export default ModalSettingsWrapper;