import React, { useState } from 'react';

const QuoteOfTheDay = ({ quotes }) => {
  const [randomQuote, setRandomQuote] = useState('');

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex].quote);
  };

  return (
    <div className='quote-of-the-day'>
      {/* <h2>Quote of the Day</h2> */}
      <button onClick={handleRandomQuote}>Quote of the Day</button>
      {randomQuote && <p className='random-quote'>{randomQuote}</p>}
    </div>
  );
};

export default QuoteOfTheDay;
