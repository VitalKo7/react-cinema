import React from 'react';
import background from '../assets/BladeRunner2049.jpg';

import Filter from '../components/Filter';
import MoviesList from '@components/Movies/MoviesList';
import MoviesScroll from '@components/MoviesScroll';
import FavouritesList from '@components/Favourites/FavouritesList';

const Favourites = () => {
  return (
    <>
      <div className="favorites__banner">
        <div className="gradient__overlay"></div>
        <img src={background} alt="" />
      </div>

      <div className="container">
        <Filter />

        <div className="favorites_movies">
          <FavouritesList />

          <MoviesList />
        </div>

        <MoviesScroll />
      </div>
    </>
  );
};

export default Favourites;
