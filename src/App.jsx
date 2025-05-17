import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import Movie from '@pages/Movie';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
