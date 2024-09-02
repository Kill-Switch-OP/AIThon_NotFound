import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Spinner, Alert, ListGroup } from 'react-bootstrap';

const RecentNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_KEY = '2ec7716bb115402685883c621d4de59f'; // Access the API key from the .env file

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything',
        {
          params: {
            q: 'ethereum',
            language: 'en',
            sortBy: 'publishedAt',
            apiKey: API_KEY,
            pageSize: 5, // Number of articles to fetch
          },
        }
      );
      setArticles(response.data.articles);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title className='card-title-custom'>Recent Ethereum News</Card.Title>
        {loading && <Spinner animation="border" />}
        {error && <Alert variant="danger">Error fetching news.</Alert>}
        {!loading && !error && (
          <ListGroup variant="flush">
            {articles.map((article, index) => (
              <ListGroup.Item key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
                <br />
                <small>{new Date(article.publishedAt).toLocaleString()}</small>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
};

export default RecentNews;