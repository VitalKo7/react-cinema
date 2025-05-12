import React, { useState } from 'react';

const Filter = () => {
  const [status, changeStatus] = useState('Popular');

  let filter_categories = ['Popular', 'Novelty', 'Featured', 'Short films'];

  return (
    <div className="filter">
      <div id="categoryes" className="filter__categoryes anchor">
        <div className="filter__categoryes-flex">
          {filter_categories.map((category, index) => (
            <div
              onClick={() => {
                changeStatus(category);
              }}
              className={`filter__categoryes-item
                ${category === status ? 'active-category' : ''}`}
              key={index}
            >
              <p>{category}</p>
              <span></span>
            </div>
          ))}
        </div>
        <span></span>
      </div>

      <div className="filter__buttons">
        <button>Movies</button>
        <button>Cinema</button>
        <button>Adventure</button>
        <button>Comedy</button>
        <button>Fantasy</button>
        <button>History</button>
        <button>Cartoon</button>
        <button>Detective</button>
        <button>Mysticism</button>
        <button>Drama</button>
      </div>

      <div className="filter__search">
        <input type="text" placeholder="Search..." />

        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Filter;
