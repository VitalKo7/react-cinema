import React, { createContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import Movie from '@Pages/Movie';
import NotFound from '@Pages/NotFound';
import { Provider } from 'react-redux';
import store from './Redux/store';

export const Films = createContext([]);

function App() {
  // useEffect(() => {
  //   async function FetchFilms() {
  //     await fetch('https://676c1c82bc36a202bb86c01d.mockapi.io/movies')
  //       .then(data => {
  //         return data.json();
  //       })
  //       .then(data => {
  //         changeFilms(data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }
  //   FetchFilms();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
