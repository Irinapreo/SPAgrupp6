import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct
import ArticleList from '../components/ArticleList'; // Ensure this path is correct
import Footer from '../components/Footer'; // Importing the Footer component

const App = () => {
    return (
        <div>
            <Navbar />
            <main role="main" className="pb-3">
                <div className="container">
                    <div className="row article-container">
                        <ArticleList />
                    </div>
                </div>
            </main>
            <Footer /> 
        </div>
    );
};

export default App;
console.log("App component rendered");