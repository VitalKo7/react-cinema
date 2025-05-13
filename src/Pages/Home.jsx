import React from 'react';
import Banner from '../components/Home/Banner';
import Filter from '../components/Filter';
import MoviesList from '../components/Movies/MoviesList';
import MoviesScroll from '@components/MoviesScroll';

const Home = () => {
  return (
    <>
      <Banner />

      <div className="container">
        <Filter />
        <MoviesList />
        <MoviesScroll />
      </div>
    </>
  );
};

export default Home;
