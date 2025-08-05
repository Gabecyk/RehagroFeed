import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';



function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}

export default AppRoutes;
