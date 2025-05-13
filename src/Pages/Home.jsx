import React from 'react';
import Banner from '../components/Home/Banner';
import Filter from '../components/Home/Filter';
import MoviesList from '../components/Movies/MoviesList';

const Home = () => {
  return (
    <>
      <Banner />

      <div className="container">
        <Filter />
        <MoviesList />

        <div className="movies__scroll">
          <button>
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
