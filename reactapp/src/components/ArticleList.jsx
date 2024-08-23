import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [topic, setTopic] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);
            try {
                const params = new URLSearchParams();
                if (searchString) params.append('searchString', searchString);
                if (topic) params.append('topic', topic);
                if (sortBy) params.append('sortBy', sortBy);

                const response = await fetch(`http://localhost:3000/api/articles?${params.toString()}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched articles:', data); // Debugging
                setArticles(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, [searchString, topic, sortBy]);

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        debouncedSearch(searchQuery);
    };

    const debouncedSearch = debounce((query) => {
        setSearchString(query);
    }, 300);

    const handleTopicChange = (newTopic) => {
        setTopic(newTopic);
    };

    const handleSortChange = (sortOrder) => {
        setSortBy(sortOrder);
    };

    const handleResetTopic = () => {
        setTopic('');
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

    const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const regex = new RegExp(`(${highlight})`, 'gi');
        return text.split(regex).map((part, index) =>
            regex.test(part) ? <mark key={index}>{part}</mark> : part
        );
    };

    const filteredArticles = articles.filter(
        (article) => article.Title.toLowerCase().includes(searchString.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Artiklar</h1>

            <form onSubmit={(e) => e.preventDefault()} className="search-form">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Sök artiklar..."
                        name="searchString"
                        onChange={handleSearch}
                    />
                </div>
            </form>

            <div className="row">
                <div className="col-md-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => handleTopicChange('')}>
                        Visa Alla
                    </button>
                    {Object.entries(topicDisplayNames).map(([key, value]) => (
                        <button
                            key={key}
                            className="btn btn-primary"
                            onClick={() => handleTopicChange(key)}>
                            {value}
                        </button>
                    ))}
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-md-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSortChange('newest')}>
                        Nyast till Äldst
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSortChange('oldest')}>
                        Äldst till Nyast
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12">
                    <h4 className="article-count">Antal artiklar: {filteredArticles.length}</h4>
                </div>
            </div>

            <div className="row mt-4">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{highlightText(article.Title, searchString)}</h5>
                                    <p className="card-text">{highlightText(article.Summary, searchString)}</p>
                                    <a href={article.Link} className="card-link" target="_blank" rel="noopener noreferrer">Läs mer</a>
                                    <p className="card-text"><small className="text-muted">{new Date(article.Published).toLocaleDateString()}</small></p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Inga artiklar hittades.</p>
                )}
            </div>
        </div>
    );
};

export default ArticleList;
