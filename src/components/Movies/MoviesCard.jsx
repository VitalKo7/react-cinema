import React from 'react';
import PropTypes from 'prop-types';
import star from '../../assets/icons/star.png';
import imgFilm from '../../assets/ImageFilm.jpg';
import { Link } from 'react-router-dom';

const MoviesCard = props => {
  return (
    <Link className="movies__card" to="/movie">
      <div className="movies__card-rating">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <img src={imgFilm} alt="imgFilm" />
    </Link>
  );
};

MoviesCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MoviesCard;
