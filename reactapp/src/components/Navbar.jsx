import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleTheme } from '../utils/themeToggle';

const Navbar = ({ isAuthenticated, onLogout }) => {

    const playSound = () => {
        const audioFiles = [
            '/assets/audio/homePlease.mp3',
            '/assets/audio/greatsuccess.mp3',
            '/assets/audio/highfive.mp3'
        ];
        
        const randomIndex = Math.floor(Math.random() * audioFiles.length);
        const selectedAudio = new Audio(audioFiles[randomIndex]);
        
        selectedAudio.preload = 'auto';
        selectedAudio.play().catch(error => {
            console.error('Error playing sound:', error); 
        });
    };

    useEffect(() => {
      const navbarBrand = document.querySelector('.navbar-brand');
      if (navbarBrand) {
        navbarBrand.addEventListener('click', playSound);
      }

      return () => {
        if (navbarBrand) {
          navbarBrand.removeEventListener('click', playSound);
        }
      };
    }, []);

    return (
        <nav className="navbar navbar-light navbar-custom border-bottom box-shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Grupp VI</Link>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Hem</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/kontakt">Kontakt</Link>
                        </li>
                        <li className="nav-item">
                            {isAuthenticated ? (
                                <Link className="nav-link text-dark" onClick={onLogout}>Logga ut</Link>                                                                    
                            ) : (
                                <Link className="nav-link text-dark" to="/login">Logga in</Link>
                            )}
                        </li>
                    </ul>
                    <button className="btn btn-light" id="theme-toggle" onClick={toggleTheme}>Light Theme</button>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
