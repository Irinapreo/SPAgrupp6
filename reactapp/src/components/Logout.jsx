import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onLogout();
    navigate('/login'); // Redirect to login page after logout
  }, [onLogout, navigate]);

  return <div>Logging out...</div>;
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Logout;
