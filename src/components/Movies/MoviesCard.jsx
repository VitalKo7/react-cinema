import React from 'react';
import { Link } from 'react-router-dom';
import star from '../../assets/icons/star.png';
// import imgFilm from '../../assets/ImageFilm.jpg';
import PropTypes from 'prop-types';

const MoviesCard = props => {
  // console.log(props.title);

  return (
    <Link className="movies__card" to="/movie">
      <div className="movies__card-rating">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <img src={props.imageUrl} alt="imgFilm" />
    </Link>
  );
};

MoviesCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default MoviesCard;
