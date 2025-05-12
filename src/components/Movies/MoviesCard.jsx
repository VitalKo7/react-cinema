import React from 'react';
import star from '../../assets/icons/star.png';
import img_film from '../../assets/ImageFılm.jpg';

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
      <img src={img_film} alt="img_film" />
    </a>
  );
};

export default MoviesCard;
