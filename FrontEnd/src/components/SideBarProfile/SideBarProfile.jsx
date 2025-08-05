import React from 'react';
import './SidebarProfile.css';

const SidebarProfile = () => {
  return (
    <div className="sidebar-profile">
      <div className="profile-header" />

      <div className="profile-picture">
        <div className="initial">L</div>
      </div>

      <div className="profile-info">
        <div className="profile-name">Laila Maciel</div>
        <div className="profile-role">Dev Fullstack</div>
        <div className="profile-date">Usuário desde DD/MM/YYYY</div>
      </div>
    </div>
  );
};

export default SidebarProfile;