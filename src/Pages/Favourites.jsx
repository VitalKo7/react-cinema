import React from 'react';

import Filter from '../components/Filter/Filter';
import MoviesList from '@components/Movies/MoviesList';
import MoviesScroll from '@components/Movies/MoviesScroll';
import FavouritesList from '@components/Favourites/FavouritesList';
import Banner from '@components/Favourites/Banner';

const Favourites = () => {
  return (
    <>
      <Banner />

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
