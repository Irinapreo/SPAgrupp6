// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ArticleList from './components/ArticleList';
import Privacy from './components/Privacy';
import './App.css'; // Import global styles

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<ArticleList />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
