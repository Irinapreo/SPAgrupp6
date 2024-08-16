import React from 'react';
import Navbar from './components/Navbar'; // Ensure this path is correct
import ArticleList from './ArticleList'; // Ensure this path is correct
import Footer from './components/Footer'; // Importing the Footer component

const App = () => {
    return (
        <div>
            <Navbar />
            <main role="main" className="pb-3">
                <div className="container">
                    <div className="row article-container">
                        <ArticleList /> {/* This component will fetch and display the articles */}
                    </div>
                </div>
            </main>
            <Footer /> {/* Adding the Footer component here */}
        </div>
    );
};

export default App;
