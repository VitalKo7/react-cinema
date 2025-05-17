import React from 'react';
import PropTypes from 'prop-types';
import star from '../../assets/icons/star.png';
import imgFilm from '../../assets/ImageFilm.jpg';

const MoviesCard = (props) => {
  //TODO
  console.log(props);

  return (
    <a className="movies__card" href="./movie.html">
      <p>{props.name}</p>
      <div className="movies__card-rating">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <img src={imgFilm} alt="imgFilm" />
    </a>
  );
};

MoviesCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MoviesCard;
