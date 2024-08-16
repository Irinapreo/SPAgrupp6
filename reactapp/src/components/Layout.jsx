// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="App">
            <Navbar />
            <main role="main" className="pb-3">
                <div className="container">
                    {children}
                </div>
            </main>
            <footer className="border-top footer text-muted">
                <div className="footer-container">
                    &copy; 2024 - JensensWebApp - <a href="/privacy">Privacy</a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
