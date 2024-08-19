// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toggleTheme } from '../utils/themeToggle'; // Ensure correct path



const Navbar = () => {
    // Function to play sound
    const playSound = () => {
      const audio = new Audio('/assets/audio/homePlease.mp3'); // Correct path relative to public directory
      audio.preload = 'auto';
      audio.play().catch(error => {
        console.error('Error playing sound:', error); // Log any errors
      });
    };
  
    // Setup event listener on component mount and cleanup on unmount
    useEffect(() => {
      const navbarBrand = document.querySelector('.navbar-brand');
      if (navbarBrand) {
        navbarBrand.addEventListener('click', playSound);
      }
  
      // Cleanup function
      return () => {
        if (navbarBrand) {
          navbarBrand.removeEventListener('click', playSound);
        }
      };
    }, []);
  
    return (
        <nav className="navbar navbar-expand-sm navbar-light navbar-custom border-bottom box-shadow mb-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Grupp VI</Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/privacy">Privacy</Link>
                        </li>
                    </ul>
                    <button className="btn btn-light" id="theme-toggle" onClick={toggleTheme}>Light Theme</button>
                </div>
            </div>
        </nav>
    );
  };
  
  export default Navbar;
  
console.log("Navbar component rendered");
