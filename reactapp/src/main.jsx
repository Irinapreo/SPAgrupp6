// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/App'; // Import your main App component
import './assets/index.css'; // Import your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            {/* Add additional routes here if needed */}
        </Routes>
    </Router>
);
