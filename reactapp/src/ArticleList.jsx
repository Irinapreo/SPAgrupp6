import React, { useEffect, useState } from 'react';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [sortBy, setSortBy] = useState('newest'); // Default sorting option
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Function to fetch articles based on the selected sorting option
    const fetchArticles = (sortOption) => {
        setLoading(true); // Set loading state to true
        setError(null); // Clear any previous errors

        fetch(`http://localhost:3000/api/articles?sortBy=${sortOption}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setArticles(data);
                setLoading(false); // Set loading state to false
            })
            .catch(error => {
                setError(error.message); // Set error state
                setLoading(false); // Set loading state to false
                console.error('Error fetching articles:', error);
            });
    };

    useEffect(() => {
        fetchArticles(sortBy); // Fetch articles when component mounts or sortBy changes
    }, [sortBy]);

    const handleSortChange = (event) => {
        setSortBy(event.target.value); // Update sortBy state when the user selects a different sorting option
    };

    return (
        <div>
            <h1>Articles</h1>

            {/* Sorting Menu */}
            <div>
                <label>Sort by: </label>
                <select value={sortBy} onChange={handleSortChange}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>

            {/* Loading and Error States */}
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {/* Display Articles */}
            {articles.length > 0 ? (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}> {/* Ensure article.id is unique */}
                            <h2>{article.title}</h2>
                            <p>{article.summary}</p>
                            <a href={article.link}>Read more</a>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && <p>No articles found.</p> // Show message if no articles are available
            )}
        </div>
    );
};

export default ArticleList;
