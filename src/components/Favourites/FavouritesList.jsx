import React from 'react';
import FavouritesCard from './FavouritesCard';

const FavouritesList = () => {
  return (
    <>
      <div className="top-movies">
        <p>Top Rated Films</p>
        <FavouritesCard />
        <FavouritesCard />
        <FavouritesCard />
        <FavouritesCard />
      </div>
    </>
  );
};

export default FavouritesList;
