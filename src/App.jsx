import React from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Favourites />
      <Footer />
    </>
  );
}

export default App;
