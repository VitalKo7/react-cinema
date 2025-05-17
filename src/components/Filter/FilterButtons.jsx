import React from 'react';

const FilterButtons = () => {
  let categories = [
    'Movies',
    'Cinema',
    'Adventure',
    'Comedy',
    'Fantasy',
    'History',
    'Cartoon',
    'Detective',
    'Mysticism',
    'Drama',
  ];
  return (
    <div className="filter__buttons">
      {categories.map((value, index) => (
        <button key={index}>{value}</button>
      ))}
    </div>
  );
};

export default FilterButtons;
