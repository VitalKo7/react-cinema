import React from 'react';
import background from '../assets/BladeRunner2049.jpg';
import imgFilm from '../assets/ImageFilm.jpg';
import Filter from '../components/Filter';
import MoviesList from '@components/Movies/MoviesList';
import MoviesScroll from '@components/MoviesScroll';

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
          <div className="top-movies">
            <p>Top Rated Films</p>
            <div className="top-movies__card">
              <div className="top-movies__card-padding">
                <img src={imgFilm} alt="imgFilm" />
                <div className="top-movies__card-info">
                  <div className="top-movies__card-info-title">
                    <p>Бегущий по лезвию 2049</p>
                    <p>Ридли Скотт</p>
                  </div>
                  <div className="top-movies__card-info-description">
                    <p>Film</p>
                    <p>2019</p>
                    <p>180m</p>
                    <p>9.1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MoviesList />
        </div>

        <MoviesScroll />
      </div>
    </>
  );
};

export default Favourites;
