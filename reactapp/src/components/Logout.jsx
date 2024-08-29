// src/components/Logout.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onLogout();
    navigate('/login');
  }, [onLogout, navigate]);

  return <div>Loggar ut...</div>;
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Logout;
