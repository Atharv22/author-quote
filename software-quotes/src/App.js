import React from 'react';
import './App.css';
import Home from './components/Home';
import Error from './components/Error';
import AuthorHandler from './components/AuthorHandler';
import QuoteHandler from './components/QuoteHandler';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Error/>} />
          <Route path='/author' element={<AuthorHandler />} />
          <Route path='/quotes' element={<QuoteHandler />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
