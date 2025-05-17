import React from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import Movie from '@pages/Movie';

function App() {
  return (
    <>
      <Header />

      {/* <Home /> */}
      <Favourites />
      {/* <Movie /> */}

      <Footer />
    </>
  );
}

export default App;
