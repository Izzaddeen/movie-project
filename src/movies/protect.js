import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protect = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default Protect;
