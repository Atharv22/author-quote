import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import AuthorHandler from './AuthorHandler';
import QuoteHandler from './QuoteHandler';
import { useHistory } from 'react-router-dom';
// import Author from './Author';

function Home() {

// Inside your component
  const history = useHistory();

  function authorHandler() {
    history.push('/author');
  }

  function quoteHandler() {
    history.push('/quotes');
}


  return (
    <div className='container'>
      <h1 className='mainTitle'>Software Quotes</h1>
      <div className='buttons'>
        <button onClick={authorHandler}>Author</button>
        <button onClick={quoteHandler}>Quotes</button>
      </div>
    </div>
  );
}

export default Home;
