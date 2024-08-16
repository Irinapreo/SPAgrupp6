// src/components/ArticleList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [topic, setTopic] = useState('');
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('/api/articles', {
                    params: {
                        searchString,
                        topic,
                        sortBy
                    }
                });
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, [searchString, topic, sortBy]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchString(e.target.searchString.value);
    };

    const handleTopicChange = (newTopic) => {
        setTopic(newTopic);
    };

    const handleSortChange = (sortOrder) => {
        setSortBy(sortOrder);
    };

    const topicDisplayNames = {
        "Halsa": "Hälsa",
        "SamhalleKonflikter": "Samhälle och Konflikter",
        "Miljo": "Miljö",
        "VetenskapTeknik": "Vetenskap och Teknik",
        "LivsstillFritt": "Livsstil och Fritid",
        "Ekonomi": "Ekonomi",
        "Religion": "Religion",
        "Idrott": "Idrott"
    };

    return (
        <div className="container">
            <h1>Articles</h1>

            <form onSubmit={handleSearch} className="search-form">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search articles..."
                        name="searchString"
                    />
                    <button type="submit" className="btn btn-outline-primary">Search</button>
                </div>
            </form>

            <div className="row">
                <div className="col-md-12">
                    {Object.entries(topicDisplayNames).map(([key, value]) => (
                        <button
                            key={key}
                            className="btn btn-primary"
                            onClick={() => handleTopicChange(key)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-md-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSortChange('newest')}
                    >
                        Nyast till Äldst
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSortChange('oldest')}
                    >
                        Äldst till Nyast
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                {articles.map((article, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.summary}</p>
                                <a href={article.link} className="card-link" target="_blank" rel="noopener noreferrer">Read More</a>
                                <p className="card-text"><small className="text-muted">{new Date(article.published).toLocaleDateString()}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
