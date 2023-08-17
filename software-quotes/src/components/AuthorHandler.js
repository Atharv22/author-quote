import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import './style.css';
import QuoteOfTheDay from './QuoteOfTheDay';

export const AuthorHandler = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch('https://quotes-vfas.onrender.com/quote')
      .then(response => response.json())
      .then(data => setAuthors(data));
  }, []);

  return (
    <div>
      <Home />
      <ul className='author'>
        <h1>Authors</h1>
        {authors.map(author => (
          <li key={author}>
            <Link to={`/quotes/${encodeURIComponent(author)}`}>{author.author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorHandler;
