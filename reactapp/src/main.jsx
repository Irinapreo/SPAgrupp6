import React from 'react';
import ArticleList from './ArticleList'; // Ensure this path is correct

const Main = () => {
    return (
        <div>
            <h1>Welcome to the News App</h1>
            <ArticleList /> {/* This component will fetch and display the articles */}
        </div>
    );
};

export default Main;