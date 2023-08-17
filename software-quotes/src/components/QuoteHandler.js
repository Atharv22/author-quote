import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import { useLocation } from 'react-router-dom';
import './style.css';
import QuoteOfTheDay from './QuoteOfTheDay';

export const QuoteHandler = () => {
  const [quotes, setQuotes] = useState([]);
  const [searchAuthor, setSearchAuthor] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    fetch('https://quotes-vfas.onrender.com/quote')
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
        setFilteredQuotes(data);
      });
  }, []);

  const handleSearch = () => {
    const filtered = quotes.filter(
      quote => quote.author.toLowerCase().includes(searchAuthor.toLowerCase())
    );
    setFilteredQuotes(filtered);
  };

  return (
    <div className='quoteContainer'>
      <Home />
      <QuoteOfTheDay quotes={quotes} />
      <div className='quotes'>
        <div className='search'>
          <h4>Search By Author</h4>
          <input
            type='text'
            value={searchAuthor}
            onChange={event => setSearchAuthor(event.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className='quotes-container'>
          <h1>Quotes</h1>
          {filteredQuotes.map((quote, index) => (
            <div className='quote-box' key={index}>
              <div className='quote-content'>{quote.quote}</div>
              <span className='author-name'>{quote.author}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteHandler;
