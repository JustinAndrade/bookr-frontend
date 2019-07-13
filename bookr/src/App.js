import React from 'react';
import './App.css';
import BookCarousel from './Components/BookCarousel/BookCarousel';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CollectionItemContainer from './Components/CollectionItemContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to Bookr!</h1>
      <p>The place for all your book rating needs</p>
      <BookCarousel />
      <CollectionItemContainer />
      <Footer />
    </div>
  );
}

export default App;
