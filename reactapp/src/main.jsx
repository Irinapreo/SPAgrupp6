import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import ArticleList from './ArticleList'; // Ensure you have this component


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);


const Main = () => {
    return (
        <div>
            <h1>Welcome to the News App</h1>
            <ArticleList /> {/* This should render the articles */}
        </div>
    );
};

export default Main;
