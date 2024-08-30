// src/pages/Home.jsx
import React from 'react';
import ArticleList from '../components/ArticleList';
import TermsAndConditions from '../components/TermsAndConditions';
import ParentComponent from '../components/App';

const Home = () => {
    return (
        <div>
            <ParentComponent/>
        </div>
    );
};

export default Home;
