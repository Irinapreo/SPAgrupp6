import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-top footer text-muted">
            <div className="footer-container">
                &copy; 2024 - JensensWebApp - <Link to="/kontakt">Kontakt</Link>
            </div>
        </footer>
    );
};

export default Footer;