import React from 'react';

const FilterButtons = () => {
  const [active, changeActive] = React.useState('Movies');

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
        <button
          key={index}
          onClick={() => changeActive(value)}
          className={value === active ? 'active' : ''}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
