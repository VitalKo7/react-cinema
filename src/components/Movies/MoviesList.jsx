import React, { useContext } from 'react';
import MoviesCard from './MoviesCard';
import { Films } from './../../App';

const MoviesList = () => {
  const films = useContext(Films);

  return (
    <div id="movies" className="movies anchor">
      {films.map((value, index) => (
        <MoviesCard key={index} {...value} />
      ))}
    </div>
  );
};

export default MoviesList;
