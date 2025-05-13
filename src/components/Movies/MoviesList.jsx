import React from 'react';
import MoviesCard from './MoviesCard';

const MoviesList = () => {
  let arrayFilms = ['Dog', 'Cat', 'Snow', 'Batman', 'Joker'];

  return (
    <div id="movies" className="movies anchor">
      {/* <MoviesCard /> */}

      {arrayFilms.map((value, index) => (
        <MoviesCard key={index} name={value} />
      ))}
    </div>
  );
};

export default MoviesList;
