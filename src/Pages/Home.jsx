import React from 'react';
import Banner from '../components/Home/Banner';
import Filter from '../components/Filter/Filter';
import MoviesList from '../components/Movies/MoviesList';
import MoviesScroll from '@components/Movies/MoviesScroll';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../Redux/slices/counterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  console.log(count);

  return (
    <>
      <Banner />

      <div className="container">
        <button onClick={() => dispatch(changeValue())}>Click on me!</button>
        <Filter />
        <MoviesList />
        <MoviesScroll />
      </div>
    </>
  );
};

export default Home;
