// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light navbar-custom border-bottom box-shadow mb-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Grupp VI</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/privacy">Privacy</Link>
                        </li>
                    </ul>
                    <button className="btn btn-light" id="theme-toggle" onClick={() => toggleTheme()}>Light Theme</button>
                </div>
            </div>
        </nav>
    );
};

const toggleTheme = () => {
    // Implement theme toggle logic
};

export default Navbar;
