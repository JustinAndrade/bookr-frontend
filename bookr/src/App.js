import React from 'react';
import './App.css';
import BookCarousel from './Components/BookCarousel/BookCarousel';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Bookr!</h1>
      <p>The place for all your book rating needs</p>
      <BookCarousel />
    </div>
  );
}

export default App;
