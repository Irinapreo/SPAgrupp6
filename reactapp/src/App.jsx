// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Privacy from './components/Privacy';
import Navbar from './components/Navbar';
import './styles/site.css';
import './styles/privacy.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<ArticleList />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
