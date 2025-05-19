import React from 'react';
import MoviesCard from './MoviesCard';

const MoviesList = () => {
  let arrayFilms = [];

  fetch('https://676c1c82bc36a202bb86c01d.mockapi.io/movies').then(data => {
    return data.json();
  });

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
