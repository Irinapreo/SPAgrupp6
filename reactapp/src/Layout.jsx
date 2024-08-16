// Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Import your CSS file

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light navbar-custom border-bottom box-shadow mb-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Grupp VI</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
              <button className="btn btn-light" id="theme-toggle" onClick={() => document.getElementById('theme-toggle').textContent = "Light Theme"}>Light Theme</button>
              <div className="rocket" onClick={() => startImageChange()}>
                <img src="Rocket/rocket1.png" alt="Following Image" id="following-image" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main role="main" className="pb-3">
        <div className="row article-container">
          {children}  {/* Render children components here */}
        </div>
      </main>

      <footer className="border-top footer text-muted">
        <div className="footer-container">
          &copy; 2024 - JensensWebApp - <Link to="/privacy">Privacy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
